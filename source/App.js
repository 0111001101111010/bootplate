enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
	}
});

enyo.kind({
  name: "App2",
  kind: "enyo.Control",
  tag: "div",
  components: [
    { tag: "p", content: "The Additive Primary Colors" },
    { tag: "ul", components: [
      { tag: "li", name: "red", content: "red" },
      { tag: "li", name: "green", content: "green" },
      { tag: "li", name: "blue", content: "blue" } ] } ]
});

enyo.kind({
  name: "Tweet",
  kind: enyo.Control,
  tag: "div",
  style: "border-style: solid; border-width: 2px; " +
         "padding: 10px; margin: 10px; min-height: 50px",

  published: {
    icon: "",
    handle: "",
    text: ""
  },

  components: [
    { tag: "img", name: "icon",
      style: "width: 50px; height: 50px; float: left; padding-right: 10px" },
    { tag: "b", name: "handle" },
    { tag: "span", name: "text" }
  ],

  create: function() {
    this.inherited(arguments);
    this.iconChanged();
    this.handleChanged();
    this.textChanged();
  },

  iconChanged: function() {
    this.$.icon.setAttribute("src", this.icon);
  },

  handleChanged: function() {
    this.$.handle.setContent(this.handle + ": ");
  },

  textChanged: function() {
    this.$.text.setContent(this.text);
  }
});
enyo.kind({
  name: "TweetApp",
  kind: enyo.Control,
  components: [
    { tag: "button", content: "Add Tweet", ontap: "addTweet" },
    { tag: "div", name: "tweetList" }
  ],

  nextTweetNumber: 1,
  addTweet: function(inSource, inEvent) {
    this.createComponent({
      kind: Tweet,
      container: this.$.tweetList,
      icon: "rubymermaid.png",
      handle: "unwiredben", 
      text: "A new tweet! #" + this.nextTweetNumber
    });
    ++this.nextTweetNumber;
    this.$.tweetList.render();
  }
});
