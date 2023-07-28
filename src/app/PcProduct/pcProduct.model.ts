import mongoose from 'mongoose';

const pcProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image is Required'],
  },
  productName: {
    type: String,
    required: [true, 'Image is Required'],
  },
  catagory: {
    type: String,
    required: [true, 'Catagory is Required'],
  },
  status: {
    type: String,
    enum: ['In Stock', 'Out of Stock'],
    default: 'In Stock',
  },
  price: {
    type: String,
    required: [true, 'Price is Required'],
  },
  Description: {
    type: String,
    required: [true, 'Description is Required'],
  },
  keyFeatures: {
    required: true,
    type: {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      Port: {
        type: String,
      },
      Type: {
        type: String,
      },
      resolution: {
        type: String,
      },
      voltage: {
        type: String,
      },
    },
  },
  individualRating: {
    type: String,
  },
  avarageRating: {
    type: String,
  },
  Review: {
    type: [String],
    default: [],
  },
});

export const pcModel = mongoose.model('pc', pcProductSchema);
