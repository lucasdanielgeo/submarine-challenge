function submarineFactory(x=0, y=0, z=0, direction ='NORTE') {
    let submarine = {}
    submarine.x = x;
    submarine.y = y;
    submarine.z = z;
    submarine.direction = direction;
    submarine.direction_array = ['NORTE','LESTE','SUL','OESTE'];

    function nextDirection() {
        i = this.direction_array.indexOf(this.direction)
        i = i + 1;
        i = i % this.direction_array.length;
        return this.direction_array[i];
    };

    submarine.nextDirection = nextDirection;

    function prevDirection(){
        i = this.direction_array.indexOf(this.direction);
        if (i === 0) {
            i = this.direction_array.length;
        }
        i = i -1;
        return this.direction_array[i];
    };

    submarine.prevDirection = prevDirection;

    return submarine;
}

sub = submarineFactory()


command = InputEvent

function moveSubmarine(command){
    command = Array.from(command)
    return command
};
export submarineFactory