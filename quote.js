const quoteManager = {
  quotes: [
    { text: "Your margin is my opportunity. - Jeff Bezos", likes: 193 },
    {
      text: "Failure is an option here. If things are not failing, you are not innovating enough. - Elon Musk",
      likes: 158,
    },
    {
      text: "The only way to do great work is to love what you do. - Steve Jobs",
      likes: 248,
    },
    { text: "Stay hungry, stay foolish. - Steve Jobs", likes: 9745 },
    {
      text: "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      likes: 1054,
    },
    {
      text: "It’s fine to celebrate success, but it is more important to heed the lessons of failure. - Bill Gates",
      likes: 3695,
    },
    {
      text: "Your most unhappy customers are your greatest source of learning. - Bill Gates",
      likes: 92871,
    },
    {
      text: "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily. -Zig Ziglar",
      likes: 2558,
    },
    {
      text: "Someday is not a day of the week. -Denise Brennan-Nelson",
      likes: 2569,
    },
    {
      text: "People often say that motivation doesn't last. Well, neither does bathing -- that's why we recommend it daily. -Zig Ziglar",
      likes: 2558,
    },
    {
      text: "Hire character. Train skill. -Peter Schutz",
      likes: 8269,
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life. -Steve Jobs",
      likes: 7154,
    },
    {
      text: "Sales are contingent upon the attitude of the salesman -- not the attitude of the prospect. -W. Clement Stone",
      likes: 9241,
    },
    {
      text: "Everyone lives by selling something. -Robert Louis Stevenson",
      likes: 9658,
    },
    {
      text: "If you are not taking care of your customer, your competitor will. -Bob Hooey",
      likes: 1547,
    },
    {
      text: "The golden rule for every businessman is this: Put yourself in your customer's place. -Orison Swett Marden",
      likes: 25589,
    },
  ],

  renderQuotes: function () {
    var mainQuote = document.getElementById("mainQuote");
    mainQuote.innerHTML = "";

    for (var i = 0; i < this.quotes.length; i++) {
      var quote = this.quotes[i];

      var quoteContainer = document.createElement("div");
      quoteContainer.classList.add("quote");

      quoteContainer.innerHTML = `
        <p>${quote.text} 
          <i class="fas fa-heart" style="margin-left: 5px; cursor: pointer;" onclick="quoteManager.likeQuote(${i})"></i>
          <span>${quote.likes}</span>
        </p>
      `;
      mainQuote.appendChild(quoteContainer);
    }
  },

  likeQuote: function (index) {
    this.quotes[index].likes++;
    this.renderQuotes();
  },

  addQuote: function (text) {
    if (text) {
      this.quotes.push({ text: text, likes: 0 });
      this.renderQuotes();
    } else {
      alert("Enter a quote before adding.");
    }
  },
};

quoteManager.renderQuotes();
