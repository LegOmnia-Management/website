import { Category } from "../models/index.js";

/********** CREATE **********/
const createCategory = async (req, res) => {

    try {

        const { name, color  } = req.body;

        const cat = await Category.create({
            name, 
            color
        });
    
        // retour de l'API
        return res.status(201).json({
            success: true,
            message: `La catégorie a bien été créée`,
            data: cat
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
const readCategories = async (req, res) => {

    try {
        const cat = await Category.find().sort({ name: 1 });
    
        // retour de l'API
        return res.status(200).json({
            success: true,
            message: `Les catégories ont bien été récupérées`,
            data: cat
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
const updateCategory = async (req, res) => {

    try {
        const { name, color } = req.body;
        const id = req.params.id;

        const cat = await Category.findByIdAndUpdate(
            id,
            { name, color },
            { new: true, runValidators: true }
        );

        if (!cat) {
            return res.status(404).json({ 
                success: false, 
                message: 'Catégorie introuvable'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'La catégorie a bien été modifiée',
            data: cat
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
const deleteCategory = async (req, res) => {

    try {

        const cat = await Category.findByIdAndDelete(req.params.id);

        if (!cat) {
            return res.status(404).json({
                success: false,
                message: 'Catégorie introuvable'

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

/********** READ 1 seule catégorie **********/
const getCategoryBySlug = async (req, res) => {

    try {

        const cat = await Category.findOne({ slug: req.params.slug });

        if (!cat) {
            return res.status(404).json({ 
                success: false, 
                message: 'Catégorie introuvable'
            });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Catégorie récupérée avec succès',
            data: cat
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
    createCategory,
    readCategories, 
    updateCategory,
    deleteCategory,
    getCategoryBySlug
};