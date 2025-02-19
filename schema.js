const mongoose = require('mongoose');

// Comment Schema
const commentSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      
    },
    message: {
      type: String,
      required: true,
     
    },
    commentedAt: {
      type: Date,
      default: Date.now,
      
    }
  }, { timestamps: { createdAt: 'commentedAt', updatedAt: false } });


const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: 5,
    required: true,
    
  },
  content: {
    type: String,
    minlength: 50,
    required: true,
    
  },
  author: {
    type: String,
    required: true,
    
  },
  tags: {
    type: [String],
    
  },
  category: {
    type: String,
    default: "General",
    
  },
  likes: {
    type: [String],
    
  }
}, { 
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
});

// Create BlogPost Model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;


// Create Models
const Comment = mongoose.model('Comment', commentSchema);
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = { Comment, BlogPost };
