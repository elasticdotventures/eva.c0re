<template>
  <!-- Section: contact -->


    <section id="contact" class="home-section text-center">
        
      <div class="heading-contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="wow bounceInDown" data-wow-delay="0.4s">
                <div class="section-heading">
                  <h2>Get in touch</h2>

        <div class="row">
          <div class="col-lg-2 col-lg-offset-5">
            <hr class="marginbot-50">
          </div>
        </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">

        <!-- form -->
        <div class="row">

          <div class="col-lg-8">
            <div class="boxed-grey">

              <div v-bind:class="{ show:isSubmitted }" id="sendmessage">Your message has been sent. Thank you!</div>

              <div id="errormessage"></div>

              <form v-bind:class="{ hide:isSubmitted }" id="contact-form" role="form" class="contactForm"
                 @submit.prevent="submit">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">
                        Name</label>
                      <input type="text" v-model="name" name="name" class="form-control" id="name"
                        placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group">
                      <label for="email">
                        Email Address</label>
                      <div class="form-group">
                        <input type="email" v-model="email" class="form-control"
                          :class="{ email , error: !email.valid }" name="email" id="email" placeholder="Your Email"
                          data-rule="email" data-msg="Please enter a valid email" />
                        <div class="validation"></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="subject">
                        Subject</label>
                      <input type="text" class="form-control" v-model="subject" name="subject" id="subject"
                        placeholder="Subject" data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject" />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">
                        Message</label>
                      <textarea class="form-control" name="message" rows="5" v-model="message" data-rule="required"
                        data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-skin pull-right" id="btnContactUs">
                      Send Message</button>
                  </div>
                </div>
              </form>




            </div>
          </div>


        <div class="col-lg-4">
            <div class="widget-contact">
              <h5>Main Office</h5>

              <address>
                <strong>B2BCBD.us</strong><br>
                c/o <a href="http://elastic.ventures">Elastic.Ventures</a><br>
                30661 Valley Center Rd. #B<br>
                San Diego, CA. 92082<br>
                <abbr title="Phone">P:</abbr> +1 929-515-6544
              </address>

              <address>
                <strong>Email</strong><br>
                <a href="mailto:info@b2bcbd.us">info@b2bcbd.us</a>
              </address>
              <address>
                <strong>We're social</strong><br>
                <ul class="company-social">
                  <li class="social-facebook"><a href="http://fb.com/b2bcbd.us" target="_blank"><i
                        class="fa fa-facebook"></i></a></li>
                  <li class="social-instagram"><a href="https://www.instagram.com/explore/tags/elasticadventures"
                      target="_blank"><i class="fa fa-instagram-plus"></i></a></li>
                  <!--
                                <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li class="social-dribble"><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                <li class="social-google"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                  -->
                </ul>
              </address>

            </div>
          </div>

        </div>
        <!-- /form -->

      </div>




    </section>

  <!-- /Section: contact -->
  </template>



  <!-- Core JavaScript Files -->

<script lang="ts">

// https://github.com/vuejs/vue-class-component
// https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from 'vue-property-decorator';

// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
// var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// emailregex.com
// eslint-disable-next-line
var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Cancel,
  CancelToken,
  CancelTokenSource,
  Canceler
} from 'axios';

@Component({
    props: {
        propMessage: String
    },
      // the instance state
      data: function () {
        return {
          name: "",
          email: "",
          subject: "",
          message: "",
          isSubmitted: false
        };
      },

})


/* const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
}); */


export default class B2bContactForm extends Vue {
    mounted() {
        // TODO: set a timer; for popup
    }

    submit(e: Event) {

          e.preventDefault();
          // this.name, this.email, this.subject, this.message 

var body = JSON.stringify({ name: this.$data.name, email: this.$data.email, message: this.$data.message });

axios.request({
    method: 'post',
    url: 'https://0sdtjcuryj.execute-api.us-east-1.amazonaws.com/dev/email/send', 
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    data: body
})
  .then(function (this:Vue, response: AxiosResponse) {
    // console.log(response);
    this.$data.isSubmitted = true;
  })
  .catch(function (this:Vue, error: AxiosError) {
    // console.log(error);
    alert('an error has occurred!' +  error);
    this.$data.isSubmitted = false;
  });
    }
    

}
</script>

