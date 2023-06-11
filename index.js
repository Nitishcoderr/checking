
$(document).ready(function() {
    const contactForm = $('#contact-form');
    const submitBtn = $('.submit-btn');
    const nameInput = $('#name');
    const emailInput = $('#email');
    const mobileNumberInput = $('#phone');
    const messageInput = $('#message');
  
    const mobileNumberPattern = /^\d{10}$/; // Regex pattern for a 10-digit mobile number
  
    // main
    const publicKey = "nNwkgfl-eYpOKKrmr";
    const serviceID = "service_bh4m324";
    const templateID = 'template_idiguqq';


    emailjs.init(publicKey);
  
    contactForm.on('submit', function(e) {
      e.preventDefault();
  
      if (!mobileNumberPattern.test(mobileNumberInput.val())) {
        // Invalid mobile number
        alert("Please enter a valid 10-digit mobile number");
        return;
      }
  
      if (contactForm.valid()) {
        const inputFields = {
          name: nameInput.val(),
          email: emailInput.val(),
          phone: mobileNumberInput.val(),
          message: messageInput.val()
        };
  
        emailjs.send(serviceID, templateID, inputFields)
          .then(function() {
            // Changing btn text
            submitBtn.text("Message Sent Successfully");
            nameInput.val("");
            emailInput.val("");
            mobileNumberInput.val("");
            messageInput.val("");
          })
          .catch(function(error) {
            submitBtn.text("Something went wrong");
          });
      }
    });
  
    // jQuery form validation rules
    contactForm.validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10
        },
        message: 'required'
      },
      messages: {
        name: 'Please enter your name',
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a valid email address'
        },
        phone: {
          required: 'Please enter your phone number',
          digits: 'Please enter only digits',
          minlength: 'Please enter a 10-digit mobile number',
          maxlength: 'Please enter a 10-digit mobile number'
        },
        message: 'Please enter a message'
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass('is-invalid').removeClass('is-valid');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass('is-invalid').addClass('is-valid');
      }
    });
  });
  