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
    submarine.nextDirection = nextDirection; // Defindo a função como método do objeto

    function prevDirection(){
        i = this.direction_array.indexOf(this.direction);
        if (i === 0) {
            i = this.direction_array.length;
        }
        i = i -1;
        return this.direction_array[i];
    };
    submarine.prevDirection = prevDirection;
    
    function moveSubmarine(command){
        command = Array.from(command)
        return command
    };
    submarine.moveSubmarine = moveSubmarine;

    function turnLeft(command) {
        if (command.toUpperCase() === 'L') {
            console.log(`direção do submarino agora é ${this.prevDirection().toLowerCase()}.`);
            this.direction = this.prevDirection();
            return this.direction;
        }
    }
    submarine.turnLeft = turnLeft;

    function turnRight(command) {
        if (command.toUpperCase() === 'R') {
            console.log(`direção do submarino agora é ${this.nextDirection().toLowerCase()}.`);
            this.direction = this.nextDirection();
            return this.direction;
        }
    }
    submarine.turnRight = turnRight;

    function moveDown(command) {
        if (command.toUpperCase()=== 'D') {
            this.z = this.z - 1
            console.log(`O eixo z é igual a ${this.z}`)
            return this.z;
        }
    }
    submarine.moveDown = moveDown;

    function moveUp(command) {
        if (this.z === 0) {
            console.log(`Você não pode ultrapassar o limite do oceano, reveja os comandos 'U'`)
        } else if (command.toUpperCase() === 'U') {
            this.z =+ 1;
            console.log(`O eixo z é igual a ${this.z}`)
            return this.z
        }
    }
    submarine.moveUp = moveUp

    function moveSubmarine(command) {
        commandArray = Array.from(command)
        for (let characters = 0; characters < command.length; characters++) {
            const element = command[characters];
            
        }
    }
    
    return submarine;
}

sub = submarineFactory()
sub.turnRight('r')
sub.moveDown('d')
sub.moveUp('u')
sub.turnLeft('l')