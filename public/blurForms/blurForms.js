$('input').width(200).height(30)

$('input').blur(function () {
  console.log('blur triggered')
})

$('.validFormIn').keydown(function(event) {
  if (!isNaN(event.key)) {
    $('.validFormIn').css({
      background: "#e3bfce"
    })
    return false;
  } else {
    $('.validFormIn').css({
      background: "#ffffff"
    })
  }
})