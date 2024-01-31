export default class Footer {
  static channels;

  static channelList;

  static createFooter() {
    const footerContainer = document.createElement('div');

    footerContainer.className = 'footer-container';

    footerContainer.appendChild(Footer.createChannels());
    footerContainer.appendChild(Footer.createCredits());

    // Footer.moveChannels();

    return footerContainer;
  }

  static createChannels() {
    const channelsContainer = document.createElement('div');
    const channelsTitle = document.createElement('p');
    const channelList = document.createElement('ul');
    const channels = {
      github: {
        name: 'github',
        link: 'https://github.com/gedadev',
        icon: '<i class="fa-brands fa-github"></i>',
      },
      linkedin: {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/gedabg/',
        icon: '<i class="fa-brands fa-linkedin"></i>',
      },
      twitter: {
        name: 'twitter',
        link: 'https://twitter.com/gedauwu',
        icon: '<i class="fa-brands fa-square-x-twitter"></i>',
      },
      email: {
        name: 'email',
        link: 'gedaias@geda.dev',
        icon: '<i class="fa-solid fa-envelope"></i>',
      },
      resume: {
        name: 'resume',
        link: '',
        icon: '<i class="fa-solid fa-file-lines"></i>',
      },
    };

    channelsContainer.className = 'channels-container';
    channelsTitle.className = 'channels-title';
    channelList.className = 'channels';
    channelsTitle.innerText = 'Find me online';

    Object.values(channels).forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.link;
      a.title = item.name;
      li.innerHTML = item.icon;
      a.appendChild(li);
      channelList.appendChild(a);
    });

    channelsContainer.appendChild(channelsTitle);
    channelsContainer.appendChild(channelList);

    Footer.channels = channelsContainer;
    Footer.channelList = channelList;

    return channelsContainer;
  }

  static createCredits() {
    const creditsContainer = document.createElement('div');
    const credits = document.createElement('p');

    creditsContainer.className = 'credits-container';
    credits.innerHTML = '2023 <i class="fa-regular fa-copyright"></i> | Designed and built by Gedaias Jair';

    creditsContainer.appendChild(credits);

    return creditsContainer;
  }

  // static moveChannels() {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY
  //       > (document.body.scrollHeight - document.documentElement.clientHeight) * 0.98) {
  //       Footer.channels.style.position = 'static';
  //       Footer.channelList.style.flexDirection = 'row';
  //     } else {
  //       Footer.channels.style.position = 'fixed';
  //       Footer.channelList.style.flexDirection = 'column';
  //     }
  //   });
  // }
}
