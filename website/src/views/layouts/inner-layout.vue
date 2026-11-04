<script setup>

import LeftNav from "@/components/LeftNav.vue";
</script>

<template>
  <section class="container">

    <header>
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/files/historyHeader.gif" alt="HUMIS project"/>
      </router-link>

      <img src="@/assets/files/histBooks01.jpg" alt="Books on a table"/>
    </header>

    <section class="middle">
      <div class="left-side">

        <left-nav/>

        <div class="login-links">
          <img src="@/assets/files/login-cis.gif" alt="Log into CIS"/>
          <img src="@/assets/files/login-humis.gif" alt="Log into HUMIS"/>
        </div>
      </div>

      <section class="inner">

        <nav class="drop-down-menu">
          Navigate:

          <label for="major-navigation">
            <select name="major-navigation" id="major-navigation">
              <option value="about-us.html" class="active">About us</option>
              <option value="#">Faculty &amp; staff</option>
              <option value="#">Undergraduate students</option>
              <option value="#">Graduate students</option>
              <option value="#">Courses &amp; syllabi</option>
              <option value="#">News &amp; announcements</option>
              <option value="#">Friends &amp; alumni</option>
              <option value="#">Contact us</option>
            </select>
          </label>
        </nav>

        <nav class="minor top">
          <a href="#">Campus directory</a>
          <a href="#">Department calendar</a>
          <a href="contact-us.html">Contact us</a>

          <a href="index.html">Home
            <img src="@/assets/files/u_small.gif" alt="U of U Logo"/>
          </a>
        </nav>

        <main>
          <slot/>
        </main>

        <nav class="minor bottom">
          <a href="#">Disclaimer</a>
          <a href="#">Text only</a>
          <a href="#">Webmaster</a>
        </nav>

      </section>
    </section>

    <footer>
      380 SOUTH 1400 EAST | 211 C HALL | SALT LAKE CIT Y | UT | 84112 | PHONE 801.581.6121 | FAX 801.585.0580
    </footer>

  </section>
</template>

<style scoped>
section.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  justify-content: space-between;
  max-width: 780px;

  header {
    img {
      width: 100%;
      display: block;
    }
  }

  section.middle {
    height: 100%;
    display: flex;
    flex-direction: column;

    div.left-side {
      display: none;
    }

    section.inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      nav.drop-down-menu {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        background-color: grey;
        padding: 20px 10px;

        label {
          select {
            width: 100%;
          }
        }
      }

      nav.minor {
        display: flex;
        justify-content: center;
        font-size: 10px;
        align-items: center;

        a {
          color: var(--black);
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


        &.top {
          text-transform: uppercase;
          margin-top: 5px;
          order: -2;

        }

        &.bottom {
          text-transform: lowercase;
          margin-bottom: 5px;
        }
      }

      h1.undergrad {
        color: #d62c39;
        text-decoration: underline;
        text-align: center;
      }

      main {
        padding: 30px;

        p.hours {
          padding-bottom: 200px;
        }


        h2 {
          color: #d62c39;
        }

        .media-box {
          float: right;
          margin: 10px 0 10px 20px;
          width: 220px;
          text-align: center;

          h3 {
            color: #d62c39;
          }
        }

        .media-box img {
          width: 100%;
          height: auto;
          display: block;
        }

      }

      .content-columns {
        display: flex;
        gap: 20px;

        .sub-topics {
          border: #A12D37 solid 1px;
          font-size: 11px;
          text-align: left;
          padding-left: 20px;
          padding-right: 12px;
          line-height: 1.5;
          border-right: 2px dotted #666;
          border-top: none;
          border-left: none;
          border-bottom: none;
        }

        .content {
          font-size: 12px;
          text-align: justify;
          padding-right: 20px;
          padding-bottom: 200px;


          p.link {
            font-size: 10px;
            color: #d62c39;
            font-weight: bold;
            font-family: "Arial Black";
          }
        }
      }
    }
  }

  footer {
    color: white;
    background-color: var(--engDeptGreen);
    text-align: center;
    padding: 10px;
    font-size: 10px;
  }


  /* Tablet and up overrides */
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

        nav.left-nav {
          margin: 20px 20px 0;

          a {
            display: block;
            text-transform: uppercase;
            font-size: 10px;
            color: var(--black);
            border-bottom: 2px solid var(--engDeptGreen);
            text-decoration: none;
            padding: 10px 0 10px 10px;

            &:hover {
              background-color: var(--engDeptGreen);
              color: #fff;
            }

            &.active {
              font-weight: bold;
            }
          }
        }

        div.login-links {
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

    div.content-columns {
      flex-direction: row; /* <-- 2. En escritorio vuelven a estar lado a lado */

      .sub-topics {
        width: 32%;
        border-right: 2px dotted #666; /* Vuelve la línea punteada */
        padding-right: 12px;
        padding-left: 20px;
      }

      .content {
        width: 68%;
        padding-right: 20px;
        padding-bottom: 100px;
      }
    }
  }
}
</style>