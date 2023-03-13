const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        
        createdAt: {
            type:Date,
            default: Date.now,
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],

    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(,)
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = Thought;