const { Shorts } = require('../models/shorts'); 

exports.createShort = async (req, res) => {
  const { category, title, author, publish_date, content, actual_content_link, image, votes } = req.body;

  try {
    const newShort = await Shorts.create({
      category,
      title,
      author,
      publish_date,
      content,
      actual_content_link,
      image,
      votes,
    });

    res.status(200).json({
      message: 'Short added successfully',
      short_id: newShort.id,
      status_code: 200,
    });
  } catch (error) {
    console.error('Error creating short:', error);
    res.status(500).json({
      message: 'Internal server error',
      status_code: 500,
    });
  }
};
