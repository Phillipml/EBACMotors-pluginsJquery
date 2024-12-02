$(document).ready(function () {
  $("#image-carousel").slick({
    autoplay: true,
    arrows: false,
  });

  $("#phone").mask("(00) 00000-0000", {
    placeholder: "(DDD) 12345-6789",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "123.456.789-00",
  });

  $("#zipCode").mask("00000-000", {
    placeholder: "012345-678",
  });

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      adress: {
        required: true,
      },

      cpf: {
        required: true,
      },
      zipCode: {
        required: true,
      },
    },
    messages: {
      name: "Insira o seu nome completo",
      email: "Insira um email válido",
      phone: "Insira um telefone válido",
      adress: "Insira um endereço válido",
      cpf: "Insira um CPF válido",
      zipCode: "Insira um CEP válido",
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      let invalids = validator.numberOfInvalids();
      alert(
        `Por favor, preencha o(s) ${invalids} campo(s) para prosseguir com a compra!`
      );
    },
  });
});
