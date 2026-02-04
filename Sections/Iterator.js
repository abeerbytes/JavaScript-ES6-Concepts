const playlist = {
    songs: ["tere hawale", "radha", "dil dobaa"],
    [Symbol.iterator]() {
        let index = 0
        let list = this.songs
        return {
            next() {
                if (index < list.length) {
                    return { value: list[index++], done: false }
                }
                else {
                    return { done: true }
                }
            }
        }

    }

}

for(let song of playlist){
    console.log(song)
}