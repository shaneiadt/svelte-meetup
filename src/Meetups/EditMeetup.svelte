<script>
  import meetups from "./meetups-store.js";
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty, isEmail } from "../helpers/validation";

  let title = "",
    subtitle = "",
    description = "",
    imageUrl = "",
    contact = "",
    address = "";

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: descriptionValid = !isEmpty(description);
  $: imageValid = !isEmpty(imageUrl);
  $: contactValid = isEmail(contact);
  $: addressValid = !isEmpty(address);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    descriptionValid &&
    imageValid &&
    contactValid &&
    addressValid;

  function submitForm() {
    const meetupData = {
      title,
      subtitle,
      description,
      imageUrl,
      contact,
      address
    };
    meetups.addMeetup(meetupData);
    dispatch("save");
  }

  function cancel() {
    dispatch("cancel");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      valid={titleValid}
      validMsg="Please enter a valid title"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="SubTitle"
      valid={subtitleValid}
      validMsg="Please enter a valid subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      valid={addressValid}
      validMsg="Please enter a valid address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      valid={imageValid}
      validMsg="Please enter a valid image URL"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="contact"
      label="Contact"
      valid={contactValid}
      validMsg="Please enter a valid contact email"
      type="email"
      value={contact}
      on:input={event => (contact = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      valid={descriptionValid}
      validMsg="Please enter a valid description"
      controlType="textarea"
      value={description}
      bind:value={description}
      on:input={event => (description = event.target.value)} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
  </div>
</Modal>
