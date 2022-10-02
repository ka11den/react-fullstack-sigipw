import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true  }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}

export const addContact = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $addToSet: {contacts: req.body.contacts}
        })
        res.status(200).json('added')
    } catch (e) {
        console.log(e)
    }
}

export const editContact = async (req, res, next) => {
    try {
        const candidate = await User.findByIdAndUpdate(req.user.id)
        candidate.contacts = candidate.contacts.map(contact => {
            if (contact._id.toString() === req.params.id) {
                contact = req.body
            } 
            return contact
        })
        console.log(req.body)
        await candidate.save()
        res.status(200).json(candidate.contacts)
    } catch (err) {
        console.log("EDIT CONTACT: ", err)
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const changePassword = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body, password: hash, },
            { new: true }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Пользователь был удален")
    } catch (err) {
        next(err)
    }
}

export const getUserStats = async (req, res, next) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
            month: { $month: "$createdAt" },
            },
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: 1 },
            },
        },
        ]);
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
}
