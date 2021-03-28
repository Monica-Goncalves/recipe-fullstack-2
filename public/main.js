var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const recipeName = this.parentNode.parentNode.childNodes[1].innerText
        const category = this.parentNode.parentNode.childNodes[3].innerText
        const prepTime = this.parentNode.parentNode.childNodes[5].innerText
        const cookingTime = this.parentNode.parentNode.childNodes[7].innerText
        const ingredients = this.parentNode.parentNode.childNodes[9].innerText
        const steps = this.parentNode.parentNode.childNodes[11].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[13].innerText)
        fetch('/like', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'recipeName': recipeName,
            'category': category,
            'prepTime': prepTime,
            'cookingTime': cookingTime,
            'ingredients': ingredients,
            'steps' : steps,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('thumbDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const recipeName = this.parentNode.parentNode.childNodes[1].innerText
        const category = this.parentNode.parentNode.childNodes[3].innerText
        const prepTime = this.parentNode.parentNode.childNodes[5].innerText
        const cookingTime = this.parentNode.parentNode.childNodes[7].innerText
        const ingredients = this.parentNode.parentNode.childNodes[9].innerText
        const steps = this.parentNode.parentNode.childNodes[11].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[13].innerText)
        fetch('deleteRecipe', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'recipeName': recipeName,
            'category': category,
            'prepTime': prepTime,
            'cookingTime': cookingTime,
            'ingredients': ingredients,
            'steps' : steps,
            'thumbUp':thumbUp
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
