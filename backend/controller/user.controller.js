import User from "../model/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const createdUser = new User({
            fullName: fullname, // Ensure consistency with the schema
            email,
            password,
        });
        console.log("Request Body:", req.body);

        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};