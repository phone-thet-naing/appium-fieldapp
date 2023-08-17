const testData = {
    submittedDate: 'JUN 30, 2023',
    clientName: 'Daw Htay Htay Hlaing',
    district: "ကျောက်တန်း (Kyauktan)",
    ward: "အမှတ် (၁) ရပ်ကွက် (No (1) Ward)",
    date: "3 July 2023"
}

const appointmentData = {
    district: ["ကျောက်တန်း (Kyauktan)", "ကမာရွတ် (Kamaryut)"],
    ward: {
        "ကမာရွတ် (Kamaryut)": ["အမှတ် (၁) ရပ်ကွက် (No (1) Ward)"]
    }
}
const phoneNumber = '790900023'

const photos = [
    '~Photo taken on Jul 4, 2023 12:43:02 AM', '~Photo taken on Jul 4, 2023 12:42:50 AM', '~Photo taken on Jul 4, 2023 12:42:08 AM',
    '~Photo taken on Jun 26, 2023 10:55:42 AM', '~Photo taken on Jun 26, 2023 10:55:09 AM'
]

const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

function generateName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

async function next() {
    await $('//*[@text="NEXT"]').click();
}
async function fillDummy() {
    await $('//*[@text="FILL DUMMY"]').click();
}

async function scroll(swipe) {
    startXRatio = 50
    startYRatio = 75
    endXRatio = 50
    endYRatio = 25
    durationMiliSec = 2000
    const d = await driver.getWindowRect();
    const height = d.height;
    const width = d.width;

    const swipeStartWidth = (width * startXRatio) / 100;
    const swipeStartHeight = (height * startYRatio) / 100;
    const swipeEndWidth = (width * endXRatio) / 100;
    const swipeEndHeight = (height * endYRatio) / 100;

    for (let i = 0; i < swipe; i++) {
        await driver.touchPerform([
            { action: 'press', options: { x: swipeStartWidth, y: swipeStartHeight } },
            { action: 'wait', options: { ms: durationMiliSec } },
            { action: 'moveTo', options: { x: swipeEndWidth, y: swipeEndHeight } },
            { action: 'release' }
        ]);
    }
}

export { scroll, fillDummy, next, generateName, nameList, photos, phoneNumber, appointmentData, testData }