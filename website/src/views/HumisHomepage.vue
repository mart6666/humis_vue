<script setup>

import BottomNav from "@/components/BottomNav.vue";
import TopNav from "@/components/TopNav.vue";
import LeftNav from "@/components/LeftNav.vue";
</script>

<template>
  <div class="container">

    <header>
      <img src="@/assets/files/historyHome.gif" alt="U of U History Department logo"/>
      <img src="@/assets/files/histHomepic.jpg" alt="Shelf of books"/>
    </header>

    <section class="middle">

      <top-nav/>

      <nav class="drop-down-menu">
        <label for="major-navigation">
          <select name="major-navigation" id="major-navigation">
            <option value="#">About us</option>
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

      <div class="green-box">
        <aside class="left-side">

          <left-nav/>

        </aside>

        <main>
          <img src="@/assets/files/women_w_pottery.jpg" alt="Women w pottery"/>

          <p>The history of women in Mexico is a profound narrative of resilience, transformation, and leadership
            that spans from the pre-Columbian era to the modern day. In Mesoamerican civilizations like the Maya
            and Aztecs, women held vital, dual roles as spiritual guardians, healers, and economic contributors,
            even as they navigated strictly defined gender structures. The Spanish conquest in 1519 radically
            disrupted these traditions, imposing patriarchal colonial laws and Catholic structures that
            restricted women's autonomy. Yet, figures like Sor Juana Inés de la Cruz emerged during this time,
            defying social limitations to become one of the greatest scholars and poets of the Spanish Golden
            Age, laying early intellectual foundations for women’s rights.</p>
          <p>The 19th and early 20th centuries marked a major turning point as Mexican women actively shaped the
            nation's political identity. During the Mexican War of Independence, figures like Josefa Ortiz de
            Domínguez risked their lives to pass critical intelligence to insurgents. Decades later, during the
            Mexican Revolution (1910–1920), thousands of women known as soldaderas took up arms, served as camp
            followers, smuggled weapons, and worked as nurses and journalists. Despite their immense
            contributions to the birth of modern Mexico, women had to fight for decades more to gain formal
            political recognition, finally securing the right to vote in national elections in 1953.</p>
          <p>In recent decades, the feminist movement in Mexico has achieved historic milestones while tackling
            deep-seated systemic challenges. The 21st century has seen a dramatic shift toward political parity,
            culminating in the historic election of Claudia Sheinbaum in 2024 as Mexico's first female
            president. Today, Mexican women continue to lead powerful grassroots movements, driving national
            conversations around gender equality, labor rights, and an end to gender-based violence. Their
            ongoing advocacy continues to reshape the legal, social, and cultural landscape of the country.</p>
        </main>

        <div style="clear: both;"></div>
      </div>

      <bottom-nav/>

    </section>

    <footer>
      380 SOUTH 1400 EAST | 211 C HALL | SALT LAKE CIT Y | UT | 84112 | PHONE 801.581.6121 | FAX 801.585.0580
    </footer>

  </div>
</template>

<style scoped>
div.container { /* Container div */
  min-width: 390px;
  max-width: 780px;
  margin: 0 auto;
  background-color: #FFF;

  header {
    img {
      display: block;
      width: 100%;
    }
  }

  section.middle {
    min-height: 500px;
    padding: 10px;
    background-image: url('@/assets/files/uofu_medallion_rt.gif');
    background-repeat: no-repeat;
    background-position: bottom right;
  }

  div.green-box {
    min-height: 400px;
    background-color: #C8CAAF;
    padding: 10px;
    margin: 10px 0 100px;
    border-radius: 10px;

    aside {
      &.left-side {
        display: none;

        nav {
          /* nav styles here */
        }
      }
    }

    main {
      background-color: #FFF;
      padding: 10px;

      img {
        width: 100%;
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

  /* Tablet and up overrides */
  @media screen and (width >= 600px) {
    /* A breakpoint */
    section.middle {
      > nav { /* nav child */

        &.drop-down-menu {
          display: none;
        }
      }

      div.green-box {
        padding: 20px 30px;

        aside {
          &.left-side {
            display: block;
            float: left;
            width: 33%;
          }
        }

        main {
          float: right;
          width: 60%;
        }
      }
    }
  }
}
</style>