function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
    function moveWithArrowsKeys(left, bottom, directionChange){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        setInterval(function(){
            if(direction === 'west'){
                x = x -1
            }
            if(direction === 'east'){
                x = x +10
            }
            if(direction === 'north'){
                y = y +1
            }
            if(direction === 'south'){
                y = y -1
            }
            character.style.left = x + 'px'
            character.style.bottom = y + 'px'
        }, 1)

        /*function moveCharacter(){
                if(direction === 'west'){
                    x = x -1
                }
                if(direction === 'east'){
                    x = x +1
                }
                if(direction === 'north'){
                    y = y +1
                }
                if(direction === 'south'){
                    y = y -1
                }
                element.style.left = x + 'px'
                element.style.left = y + 'px'
            }

        setInterval(moveCharacter, 1)*/
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;

            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(directionChange)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            callback(directionChange)
        })
        
        return {
            to: moveToCoordinates
            withArrowKeys: moveWithArrowKeys
        }
    }
}