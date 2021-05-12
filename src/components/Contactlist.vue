<template lang="pug">
  .contact-list_container
    h2 Welcome to Contacts List
    .addbutton(@click="showModal" id="myBtn")
      button Add New Contact
      font-awesome-icon(icon="plus")
    .modal(id="myModal")
      .modal-content
        .modal-header
          h2 New Contact
          span.close &times;
        form(action="/" )
          input(type="text" name="Name" placeholder="Enter you name" v-model="newContactName" required)
          input(type="email" name="Email" placeholder="Enter you email" v-model="newContactEmail" required)
          input(type="number" name="Number" placeholder="Enter your phonenumber" v-model="newContactPhone" required)
          button(@click="addContact") Add Contact

    .contact-info(v-for="item, index in contactsList" v-bind:key="item.index")
      <router-link :to="{ name: 'ContactInfo', params: { name: item.name, phoneNum: item.phoneNum, email: item.email } }">
        p.contact-name {{ item.name }}
        p.phone-num {{ item.phoneNum }}
      </router-link>
      button(@click="removeContact(index)")
        font-awesome-icon(icon="minus-circle") Delete Contact
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState(['contactsList']),
  data () {
    return{
      newContactName:'',
      newContactEmail:'',
      newContactPhone:''
    }
  },
  methods: {
    addContact: function () {
     if (this.newContactName && this.newContactEmail && this.newContactPhone ) {
         this.contactsList.push({
           name: this.newContactName, phoneNum: this.newContactPhone, email: this.newContactEmail
           });
        }
        localStorage.setItem('contactsList', JSON.stringify( this.contactsList));
        this.newContactName = '';
        this.newContactPhone = '';
        this.newContactEmail = '';
      },
      removeContact: function (index) {
        confirm("You will destroy that contact?")
        this.contactsList.splice(index, 1);
        localStorage.setItem('contactsList', JSON.stringify( this.contactsList));
      },
      showModal() {
        var modal = document.getElementById('myModal');
        var btn =  document.getElementById('myBtn');
        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
          modal.style.display = 'block'
        }

      span.onclick = function() {
        modal.style.display = "none"
      }
      window.addEventListener("click", function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        });
      },
    }
}
</script>
<style lang="sass">
.contact-list_container
  .contact-info
    width: 65%
    display: flex
    flex-wrap: wrap
    padding: 10px
    border: 1px solid #fff
    margin-bottom: 5px
    a
      text-decoration: none
      color: #ccc
      display: flex
      margin-left: auto
      width: 100%
      p
        margin-left: 10px
    button
      width: 28px
      height: 28px
      background: transparent
      border: 1px solid #fff
      border-radius: 50%
      &:hover
        background: #ccc
      &:last-child
        margin-left: auto
  .addbutton
    padding: 15px
    border: 1px solid #fff
    width: 25%
    background: rgb(188,201,19)
    background: linear-gradient(148deg, rgba(188,201,19,0.9082983535210959) 48%, rgba(202,202,202,1) 90%)
    margin-bottom: 10px
    display: flex
    justify-content: space-around
    font-size: 24px
    color: #000
    cursor: pointer
    button
      background: transparent
      border: none
      font-size: 18px
      cursor: pointer
  .modal
     display: none
     position: fixed
     left: 0
     top: 10%
     z-index: 1
     width: 100%
     overflow: auto
  .modal-content
     background: #0a0a0a
     margin: 3% auto
     padding: 25px
     border: 1px solid #888
     width: 45%
  .modal-header
       display: flex
       justify-content: space-between
       color: #fff
       padding-bottom: 25px
  .close
       display: block
       color: #fff
       font-size: 36px
       font-weight: bold
       margin-top: -15px
  .close:hover,
  .close:focus
       color: #ccc
       text-decoration: none
       cursor: pointer
  input
    display: block
    width: 80%
    background: transparent
    padding: 15px
    margin: 10px auto
    border: 1px solid #fff
    color: #ccc
    &::placeholder
      font-size: 18px
  form
    text-align: center
    button
      background-color: #5f9e15
      border: none
      padding: 10px
      color: #fff
      font-size: 18px

</style>
