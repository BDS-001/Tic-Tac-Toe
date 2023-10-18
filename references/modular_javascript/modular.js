// let myModule = {
//     name: 'will',
//     age: 34,
//     sayName: function() {
//         alert(this.name)
//     },
//     setName: function(newName) {
//         this.name = newName
//     }
// }

// myModule.sayName()

// //only module can access variables
// let people = (function() {
//     let name = 'will'

//     function sayName() {
//         alert(name);
//     }

//     return {
//         sayName:sayName
//     }
// })()

// let poepleTwo = {
//     people: [],
//     init: function() {
//         this.cacheDom()
//     },
//     cacheDom: function() {
//         this.el = document.querySelector('#peopleModule')
//         this.button = this.el.querySelector('button')
//         this.input = this.el.querySelector('input')
//         this.ul = this.el.querySelector('ul')
//         this.template = document.querySelector('#people-template')
//     },
//     render: function() {
//         let data = {
//             people: this.people,

//         }
//     }
    

// }


// copied from https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
var people = (function(){
    var people = ['Will', 'Steve'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();
