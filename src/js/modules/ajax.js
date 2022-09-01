import $ from 'jquery';

export function ajaxSend() {
  $('.form-send').submit(function () {
    const form = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: form.serialize()
    });
    return false;
  });

  //validate form
  const forms = document.querySelectorAll('.js-validate');
  forms.forEach((form) => {
    let validate = {
      text: null,
      tel: null,
      time: null,
      textNumberOfInputsInTheForm: 0,
    };
    const inputs = form.querySelectorAll("input");
    const inputSubmit = form.querySelector("button[type=submit]");
    const inputsText = form.querySelectorAll("input[type=text]");

    inputs.forEach((input) => {
      if (input) {
        if (input.type.toLowerCase() === "text") {
          validate.textNumberOfInputsInTheForm = inputsText.length;
        }
        input.addEventListener("input", () => {
          input.classList.remove("form-error");
          let inputType = input.type.toLowerCase();
          switch (inputType) {
            case "text":
              validate.textTheNumberOfCompletedInputsInTheForm = 0;
              inputsText.forEach((inputText) => {
                if (inputText.value.length > 1) {
                  validate.textTheNumberOfCompletedInputsInTheForm++;
                  if (validate.textNumberOfInputsInTheForm === validate.textTheNumberOfCompletedInputsInTheForm) {
                    validate.text = true;
                  }
                } else {
                  validate.text = false;
                }
              });
              break;
            case "tel":
              if (input.value.length > 16) {
                validate.tel = true;
              } else {
                validate.tel = false;
              }
              break;
            // case "time":
            //   if (input.value.length > 3) {
            //     validate.time = true;

            //   } else {
            //     validate.time = false;
            //   }
            default:
              break;
          }
          if (validate.tel && validate.text) {
            inputSubmit.disabled = false;
          } else {
            inputSubmit.disabled = true;
          }
        });
        input.addEventListener("input", () => {
          let inputType = input.type.toLowerCase();
          switch (inputType) {
            case "text":
              if (input.value.length < 2) {
                input.classList.add("form-error");
              }
              break;
            case "tel":
              if (input.value.length < 16) {
                input.classList.add("form-error");
              }
              break;
            default:
              break;
          }
        });
      }
    });
  });
}
