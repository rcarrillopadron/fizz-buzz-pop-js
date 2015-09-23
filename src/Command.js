class Command {
    match(number){
        this.number = number;
    }

    get message() {
        return this.number.toString();
    }
}

export default Command;