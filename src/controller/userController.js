const uploadImages = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                message: "No files uploaded",
            });
        }

        const imageUrls = req.files.map(file => `path/to/uploaded/files/${file.filename}`);

        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        user.images = imageUrls;
        await user.save();

        res.status(200).json({
            message: "Images uploaded successfully",
            images: imageUrls,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

module.exports = {uploadImages}
