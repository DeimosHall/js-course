const player = {
    play: function() {
        console.log('Playing...');
    },
    stop: () => console.log('Stoped...')
}

player.play();
player.stop();

// learning(); // Doesn't work
const learning = (language) => console.log(`Learning ${language}`);
learning('Javascript');
learning('Nodejs');