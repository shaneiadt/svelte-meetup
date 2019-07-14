import { writable } from 'svelte/store'

const meetups = writable([
    {
        id: "m1",
        title: "Coding Bootcamp",
        subtitle: "Learn to code in 2 hours",
        description:
            "In this meetup, we will have some experts that teach you how to code.",
        imageUrl:
            "https://www.publicdomainpictures.net/pictures/150000/velka/coffee-break-1454539196eJw.jpg",
        address: "27 Nerd Road, 34578 New York",
        contact: "code@test.com",
        isFavorite: false
    },
    {
        id: "m2",
        title: "Swim Together",
        subtitle: "Learn to code in 2 hours",
        description: "We will simply swim some rounds aboot the place.",
        imageUrl:
            "https://www.publicdomainpictures.net/pictures/10000/velka/man-swimming-in-pool-871278587620eIzC.jpg",
        address: "7 Nerd Street, 34578 Jersey",
        contact: "swim@test.com",
        isFavorite: false
    }
])

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: meetupData => {
        const newMeetup = {
            ...meetupData,
        }
        meetups.update(items => {
            return [
                ...items,
                newMeetup
            ]
        })
    },
    toggleFavorite: id => {
        meetups.update(items => {
            const updatedMeetup = { ...items.find(m => m.id === id) };
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        })
    },
    updateMeetup: (id, data) => {
        meetups.update(items => {
            const meetupIndex = items.findIndex(i => i.id === id)
            const updatedMeetup = {
                ...items[meetupIndex],
                ...data
            }
            const updatedMeetups = [...items]
            updatedMeetups[meetupIndex] = updatedMeetup
            return updatedMeetups
        })
    },
    deleteMeetup: id => {
        meetups.update(items => {
            return items.filter(item => item.id !== id)
        })
    }
}

export default customMeetupsStore