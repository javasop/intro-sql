/**
 *
 * Created by oalghanmi on 3/19/15.
 */
$(document).ready(function() {

    listArray = [];
    input = $('#list-input');
    list = $('#list');


    addToList = function(item){

        listArray.push(item)
        updateDisplay()

    }

    deleteFromList = function(item){

        index = listArray.indexOf(item)
        if(index > -1){
            listArray.splice(index,1);
        }
        updateDisplay()

    }

    updateDisplay = function(){

        list.empty()

        deleteButton = '<button class="delete">Delete</button>'

        for(i=0;i<listArray.length;i++){
            item = listArray[i];

            listItem = $('<li id='+item+'>' + item +'</li>'+ deleteButton);

            list.append(listItem)
        }

    }


    $(document).on('click','#submit',function(el){
        value = input.val();
        addToList(value)

    })

    $(document).on('click','.delete', function(el) {
        todo = el.currentTarget;

        sibling = $(todo).siblings('li')

        item = sibling[0].innerHTML;

        deleteFromList(item);

    })


})
