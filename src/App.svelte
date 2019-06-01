<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  let title = "",
    subtitle = "",
    description = "",
    imageUrl = "",
    contact = "",
    address = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code.",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/150000/velka/coffee-break-1454539196eJw.jpg",
      address: "27 Nerd Road, 34578 New York",
      contact: "code@test.com"
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Learn to code in 2 hours",
      description: "We will simply swim some rounds aboot the place.",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/10000/velka/man-swimming-in-pool-871278587620eIzC.jpg",
      address: "7 Nerd Street, 34578 Jersey",
      contact: "swim@test.com"
    }
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      contact,
      address
    };
    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      type="text"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="SubTitle"
      type="text"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      type="text"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      type="text"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="contact"
      label="Contact"
      type="email"
      value={contact}
      on:input={event => (contact = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      on:input={event => (description = event.target.value)} />
    <Button type="button" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>
