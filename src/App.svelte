<script>
  import Header from "./UI/Header.svelte";

  const meetups = [
      {
          id: 'm1',
          title: 'Coding Bootcamp',
          subtitle: 'Learn to code in 2 hours',
          description: 'In this meetup, we will have some experts that teach you how to code.',
          imageUrl: 'https://www.publicdomainpictures.net/pictures/150000/velka/coffee-break-1454539196eJw.jpg',
          address: '27 Nerd Road, 34578 New York',
          contact: 'code@test.com'
      },
      {
          id: 'm2',
          title: 'Swim Together',
          subtitle: 'Learn to code in 2 hours',
          description: 'We will simply swim some rounds aboot the place.',
          imageUrl: 'https://www.publicdomainpictures.net/pictures/10000/velka/man-swimming-in-pool-871278587620eIzC.jpg',
          address: '7 Nerd Street, 34578 Jersey',
          contact: 'swim@test.com'
      }
  ]
</script>

<Header />
