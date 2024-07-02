// Example Sequelize model definition
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

const Short = sequelize.define('Short', {
  category: DataTypes.STRING,
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  publish_date: DataTypes.DATE,
  content: DataTypes.TEXT,
  actual_content_link: DataTypes.STRING,
  image: DataTypes.STRING,
  votes: {
    type: DataTypes.JSON,
    defaultValue: {
      upvote: 0,
      downvote: 0
    }
  }
});

// Example controller method to create a short
exports.createShort = async (req, res) => {
  try {
    const newShort = await Short.create({
      category: req.body.category,
      title: req.body.title,
      author: req.body.author,
      publish_date: req.body.publish_date,
      content: req.body.content,
      actual_content_link: req.body.actual_content_link,
      image: req.body.image,
      votes: req.body.votes
    });

    res.status(201).json({ message: 'Short added successfully', short: newShort });
  } catch (error) {
    console.error('Error creating short:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
