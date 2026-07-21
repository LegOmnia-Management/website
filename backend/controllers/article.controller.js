import { Article } from "../models/index.js";

/********** CREATE **********/
const createArticle = async (req, res) => {

    try {

        const { title, illustration, categories, intro, author, publishedAt, readingTime, content } = req.body;

        const article = await Article.create({
            title,
            illustration,
            categories,
            intro,
            author,
            publishedAt,
            readingTime,
            content
        });
    
        // retour de l'API
        return res.status(201).json({
            success: true,
            message: `L'article' a bien été créé`,
            data: article
        });
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Erreur serveur :", error);
        }
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
};

/********** READ **********/
const readArticles = async (req, res) => {

    try {
        const article = await Article
            .find()
            .populate('categories', 'name slug color')
            .sort({ publishedAt: -1 })
            .select('-content');
    
        // retour de l'API
        return res.status(200).json({
            success: true,
            message: `Les articles ont bien été récupérés`,
            data: article
        });
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Erreur serveur :", error);
        }
        return res.status(500).json({ 
            success: false,
            message: "Erreur serveur"
        });
    }
};

/********** UPDATE **********/
const updateArticle = async (req, res) => {

    try {
        const { title, illustration, categories, intro, author, publishedAt, readingTime, content } = req.body;
        const id = req.params.id;

        const article = await Article.findByIdAndUpdate(
            id,
            { title, illustration, categories, intro, author, publishedAt, readingTime, content },
            { new: true, runValidators: true }
        ).populate('categories', 'name slug color');

        if (!article) {
            return res.status(404).json({ 
                success: false, 
                message: 'Article introuvable'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'L\'article a bien été modifié',
            data: article
        });

    } catch (error) {

        if (process.env.NODE_ENV === "development") {
            console.error("Erreur serveur :", error);
        }
        return res.status(500).json({ 
            success: false,
            message: "Erreur serveur"
        });
    }
}

/********** DELETE **********/
const deleteArticle = async (req, res) => {

    try {

        const article = await Article.findByIdAndDelete(req.params.id);

        if (!article) {
            return res.status(404).json({
                success: false,
                message: 'Article introuvable'

            });
        }

        return res.status(200).json({
            success: false,
            message: 'La catégorie a bien été supprimée'
        });

    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Erreur serveur :', error);
        }

        return res.status(500).json({ 
            success: false,
            message: 'Erreur serveur'
        });
    }
}

/********** READ 1 seul article **********/
const getArticleBySlug = async (req, res) => {

    try {

        const article = await Article
            .findOne({ slug: req.params.slug })
            .populate('categories', 'name slug color');

        if (!article) {
            return res.status(404).json({ 
                success: false, 
                message: 'Article introuvable'
            });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Article récupéré avec succès',
            data: article
        });
    } catch (error) {

        if (process.env.NODE_ENV === 'development') {
            console.error('Erreur serveur :', error);
        }
        
        return res.status(500).json({ 
            success: false, 
            message: 'Erreur serveur'
        });
    }
};
    
export { 
    createArticle,
    readArticles, 
    updateArticle,
    deleteArticle,
    getArticleBySlug
};