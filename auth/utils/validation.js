const { body } = require('express-validator');

const authValidation = [
  body('name').notEmpty().withMessage('name required'),
  body('email').notEmpty().withMessage('email required').isEmail(),
  body('password')
    .notEmpty()
    .withMessage('password required')
    .isLength({ min: 5 })
    .withMessage('password must be at least 5 characters')
    .custom((value) => {
      const hasCapitalLetter = /[A-Z]/;
      return !!value.match(hasCapitalLetter);
    })
    .withMessage('password must containt at least 1 capital letter')
  
];

module.exports = { authValidation };
