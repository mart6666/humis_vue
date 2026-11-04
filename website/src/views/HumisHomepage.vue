<script setup>

import LeftNav from "@/components/LeftNav.vue";
</script>

<template>
  <div class="container">

    <header>
      <img src="@/assets/files/historyHome.gif" alt="U of U History Department logo"/>
      <img src="@/assets/files/histHomepic.jpg" alt="Shelf of books"/>
    </header>

    <section class="middle">
      <nav>
        <a href="#">Campus directory</a>
        <a href="#">Department calendar</a>
        <a href="#">Contact us</a>

        <a href="#">
          <img src="@/assets/files/u_small.gif" alt="U of U Logo"/>
        </a>
      </nav>

      <div class="green-box">
        <aside class="left">

          <left-nav/>

          <div class="links">
            <a href="#">
              <img src="@/assets/files/login-humis.gif" alt="Log in to HUMIS"/>
            </a>

            <a href="#">
              <img src="@/assets/files/login-cis.gif" alt="Login to CIS"/>
            </a>
          </div>
        </aside>

        <aside class="right">
          <img src="@/assets/files/women_w_pottery.jpg" alt="Pottery"/>

          <h1>News &amp; announcements</h1>

          <p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Donec mattis venenatis risus quis
            consectetur. Suspendisse sollicitudin non orci quis varius. Integer maximus semper mi. Curabitur
            facilisis lacus in leo rutrum lacinia. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. In vitae luctus sapien. Nunc sed ipsum turpis. Maecenas id semper
            urna, eget sodales ante. Nulla eu ante ullamcorper, pharetra dolor quis, aliquet urna. Cras
            ullamcorper turpis sit amet dolor commodo, nec semper ligula posuere. Cras eu ornare diam, eget
            facilisis odio. Quisque interdum dolor massa, ut volutpat tortor eleifend vel. Pellentesque semper
            rutrum ornare.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis venenatis risus quis
            consectetur. Suspendisse sollicitudin non orci quis varius. Integer maximus semper mi. Curabitur
            facilisis lacus in leo rutrum lacinia. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. In vitae luctus sapien. Nunc sed ipsum turpis. Maecenas id semper
            urna, eget sodales ante. Nulla eu ante ullamcorper, pharetra dolor quis, aliquet urna. Cras
            ullamcorper turpis sit amet dolor commodo, nec semper ligula posuere. Cras eu ornare diam, eget
            facilisis odio. Quisque interdum dolor massa, ut volutpat tortor eleifend vel. Pellentesque semper
            rutrum ornare.
          </p>

          <p>
            Duis imperdiet sem eget sapien sagittis, sit amet ultrices mi consectetur. Ut ultrices leo at
            pellentesque bibendum. Phasellus vitae mi nec sapien ullamcorper venenatis. Fusce in convallis elit.
            Aenean sed ex id urna laoreet tincidunt. Phasellus feugiat vitae mauris sit amet ultricies. Donec
            lobortis pulvinar leo at rutrum. Morbi condimentum, est dapibus tempus ullamcorper, velit nisi
            accumsan ante, ac eleifend elit justo a nisi.
          </p>

          <p class="link">
            <a href="#">
              >> More news &amp; announcements
            </a>
          </p>
        </aside>

        <div style="clear: both;"></div>
      </div>

      <nav class="bottom">
        <a href="#">Disclaimer</a>
        <a href="#">Text only</a>
        <a href="#">Webmaster</a>
      </nav>
    </section>

    <footer>
      380 SOUTH 1400 EAST | 211 C HALL | SALT LAKE CIT Y | UT | 84112 | PHONE 801.581.6121 | FAX 801.585.0580
    </footer>

  </div>
</template>

<style scoped>
div.container { /* Container div */
  width: 780px;
  margin: 0 auto;
  background-color: #FFF;

  header {
    img {
      display: block;
    }
  }

  section.middle {
    min-height: 500px;
    padding: 10px;
    background-image: url('@/assets/files/uofu_medallion_rt.gif');
    background-repeat: no-repeat;
    background-position: bottom right;

    > nav {
      text-align: right;
      font-size: 10px;
      text-transform: uppercase;

      a {
        color: #000;
        border-right: 1px solid black;
        padding-right: 5px;
        margin-right: 5px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        img {
          vertical-align: middle;
        }

        &:last-of-type {
          border-right: none;
        }
      }

      &.bottom {
        text-transform: lowercase;
      }
    }
  }

  div.green-box {
    min-height: 400px;
    background-color: #C8CAAF;
    padding: 20px 30px;
    margin: 10px 0 100px;
    border-radius: 10px;

    aside {
      /*border: 1px solid black;*/

      &.left {
        float: left;
        width: 30%;
        min-height: 800px;
        position: relative;

        div.links {
          margin-top: 40px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      &.right {
        float: right;
        width: 60%;
        background-color: #fff;
        padding: 10px;

        img {
          width: 100%;
        }

        h1 {
          color: #505A2F;
          border-bottom: 2px dashed #A12D37;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: normal;
        }

        p {
          font-size: 12px;

          span {
            font-weight: bold;
            font-size: 110%;
          }

          &.link {
            text-align: right;

            a {
              color: red;
            }
          }
        }
      }
    }
  }

  footer {
    background-color: #676E3D;
    text-align: center;
    color: white;
    font-size: 10px;
    padding: 10px 0;
  }
}

@media screen and (width >= 600px) {
  section.middle {
    flex-direction: row;

    div.left-side {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30%;
      background-color: var(--grey-light);
      border-right: 2px solid var(--green-light);
      padding-bottom: 20px;

      div.login-links{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    }

    section.inner {
      width: 70%;

      nav.drop-down-menu {
        display: none;
      }

      nav.minor {
        justify-content: flex-end;
      }
    }
  }
}
</style>