(function(){
Template.__checkName("tabs");
Template["tabs"] = new Template("Template.tabs", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Tabs"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeIn">\n\n\n        <div class="row">\n            <div class="col-lg-6">\n                <div class="tabs-container">\n                    <ul class="nav nav-tabs">\n                        <li class="active"><a data-toggle="tab" href="#tab-1"> This is tab</a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-2">This is second tab</a></li>\n                    </ul>\n                    <div class="tab-content">\n                        <div id="tab-1" class="tab-pane active">\n                            <div class="panel-body">\n                                <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>\n\n                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                    existence in this spot, which was created for the bliss of souls like mine.</p>\n\n                                <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at\n                                    the present moment; and yet I feel that I never was a greater artist than now. When.</p>\n                            </div>\n                        </div>\n                        <div id="tab-2" class="tab-pane">\n                            <div class="panel-body">\n                                <strong>Donec quam felis</strong>\n\n                                <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects\n                                    and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>\n\n                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite\n                                    sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n            <div class="col-lg-6">\n                <div class="tabs-container">\n                    <ul class="nav nav-tabs">\n                        <li class="active"><a data-toggle="tab" href="#tab-3"> <i class="fa fa-laptop"></i></a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-4"><i class="fa fa-desktop"></i></a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-5"><i class="fa fa-database"></i></a></li>\n                    </ul>\n                    <div class="tab-content">\n                        <div id="tab-3" class="tab-pane active">\n                            <div class="panel-body">\n                                <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>\n\n                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                    existence in this spot, which was created for the bliss of souls like mine.</p>\n\n                                <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at\n                                    the present moment; and yet I feel that I never was a greater artist than now. When.</p>\n                            </div>\n                        </div>\n                        <div id="tab-4" class="tab-pane">\n                            <div class="panel-body">\n                                <strong>Donec quam felis</strong>\n\n                                <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects\n                                    and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>\n\n                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite\n                                    sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>\n                            </div>\n                        </div>\n                        <div id="tab-5" class="tab-pane">\n                            <div class="panel-body">\n                                <strong>Donec quam felis</strong>\n\n                                <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects\n                                    and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>\n\n                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite\n                                    sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="row m-t-lg">\n            <div class="col-lg-6">\n                <div class="tabs-container">\n\n                    <div class="tabs-left">\n                        <ul class="nav nav-tabs">\n                            <li class="active"><a data-toggle="tab" href="#tab-6"> This is tab</a></li>\n                            <li class=""><a data-toggle="tab" href="#tab-7">This is second tab</a></li>\n                        </ul>\n                        <div class="tab-content ">\n                            <div id="tab-6" class="tab-pane active">\n                                <div class="panel-body">\n                                    <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>\n\n                                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                        existence in this spot, which was created for the bliss of souls like mine.</p>\n\n                                    <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at\n                                        the present moment; and yet I feel that I never was a greater artist than now. When.</p>\n                                </div>\n                            </div>\n                            <div id="tab-7" class="tab-pane">\n                                <div class="panel-body">\n                                    <strong>Donec quam felis</strong>\n\n                                    <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects\n                                        and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>\n\n                                    <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite\n                                        sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n            <div class="col-lg-6">\n                <div class="tabs-container">\n                    <div class="tabs-right">\n                        <ul class="nav nav-tabs">\n                            <li class="active"><a data-toggle="tab" href="#tab-8"> This is tab</a></li>\n                            <li class=""><a data-toggle="tab" href="#tab-9">This is second tab</a></li>\n                        </ul>\n                        <div class="tab-content ">\n                            <div id="tab-8" class="tab-pane active">\n                                <div class="panel-body">\n                                    <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>\n\n                                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                        existence in this spot, which was created for the bliss of souls like mine.</p>\n\n                                    <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at\n                                        the present moment; and yet I feel that I never was a greater artist than now. When.</p>\n                                </div>\n                            </div>\n                            <div id="tab-9" class="tab-pane">\n                                <div class="panel-body">\n                                    <strong>Donec quam felis</strong>\n\n                                    <p>Thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects\n                                        and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath </p>\n\n                                    <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite\n                                        sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet.</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="row m-t-lg">\n            <div class="col-lg-12">\n                <div class="tabs-container">\n                    <ul class="nav nav-tabs">\n                        <li class="active"><a data-toggle="tab" href="#tab-10">\n                            This is tab\n                            <span class="label label-warning">NEW</span>\n                        </a>\n                        </li>\n                    </ul>\n                    <div class="tab-content">\n                        <div id="tab-10" class="tab-pane active">\n                            <div class="panel-body">\n                                <strong>Lorem ipsum dolor sit amet, consectetuer adipiscing</strong>\n\n                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of\n                                    existence in this spot, which was created for the bliss of souls like mine.</p>\n\n                                <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at\n                                    the present moment; and yet I feel that I never was a greater artist than now. When.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n    </div>') ];
}));

}).call(this);