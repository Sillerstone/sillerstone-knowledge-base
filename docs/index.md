---
layout: home

hero:
  name: "Sillerstone"
  text: "База знаний"
  tagline: Вся информация о проекте в одном месте
  image:
    src: /logo.png
    alt: Sillerstone
  actions:
    - theme: brand
      text: Правила
      link: /rules/general
    - theme: alt
      text: Лор
      link: /lore
    - theme: alt
      text: О карте
      link: /about-map

features:
  - title: GoreBox
    icon: 🎮
    details: Этот RP проект посвящён игре GoreBox. Она доступна в Steam для Windows и в Google Play для Android
  - title: Общение
    icon: 💬
    details: Общение в игре происходит по средствам текстового и голосового чатов. Основной язык проекта - Русский
  - title: RolePlay
    icon: 🎭
    details: Мы проводим отыгровки RP по разным тематикам. Основная - городская жизнь. Уровень RP проекта - Medium (средний)
  - title: Регистрация
    icon: 📄
    details: После прохождения регистрации в Discord вам откроются все остальные каналы сервера. Не забудьте прочитать правила!
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const members = [
    {
        avatar: "team/votond.png",
        name: "Votond",
        title: "Владелец проекта",
        links: [
            { icon: "discord", link: "https://discord.com/users/1015868687372255242" }
        ]
    }
]
</script>

<h1 style="margin-top: 1.5rem">Команда проекта</h1>

<VPTeamMembers size="small" :members />