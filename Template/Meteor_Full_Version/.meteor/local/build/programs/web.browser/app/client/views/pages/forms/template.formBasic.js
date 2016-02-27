(function(){
Template.__checkName("formBasic");
Template["formBasic"] = new Template("Template.formBasic", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Basic form"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-7"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Basic form <small>Simple login form example</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="row">\n                            <div class="col-sm-6 b-r"><h3 class="m-t-none m-b">Sign in</h3>\n                                <p>Sign in today for more expirience.</p>\n                                <form role="form">\n                                    <div class="form-group"><label>Email</label> <input type="email" placeholder="Enter email" class="form-control"></div>\n                                    <div class="form-group"><label>Password</label> <input type="password" placeholder="Password" class="form-control"></div>\n                                    <div>\n                                        <button class="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit"><strong>Log in</strong></button>\n                                        <label> <input type="checkbox" class="i-checks"> Remember me </label>\n                                    </div>\n                                </form>\n                            </div>\n                            <div class="col-sm-6"><h4>Not a member?</h4>\n                                <p>You can create an account:</p>\n                                <p class="text-center">\n                                    <a href=""><i class="fa fa-sign-in big-icon"></i></a>\n                                </p>\n                            </div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-5"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Horizontal form</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <form class="form-horizontal">\n                            <p>Sign in today for more expirience.</p>\n                            <div class="form-group"><label class="col-lg-2 control-label">Email</label>\n\n                                <div class="col-lg-10"><input type="email" placeholder="Email" class="form-control"> <span class="help-block m-b-none">Example block-level help text here.</span>\n                                </div>\n                            </div>\n                            <div class="form-group"><label class="col-lg-2 control-label">Password</label>\n\n                                <div class="col-lg-10"><input type="password" placeholder="Password" class="form-control"></div>\n                            </div>\n                            <div class="form-group">\n                                <div class="col-lg-offset-2 col-lg-10">\n                                    <div class="i-checks"><label> <input type="checkbox"><i></i> Remember me </label></div>\n                                </div>\n                            </div>\n                            <div class="form-group">\n                                <div class="col-lg-offset-2 col-lg-10">\n                                    <button class="btn btn-sm btn-white" type="submit">Sign in</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-8"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Inline form</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <form role="form" class="form-inline">\n                            <div class="form-group">\n                                <input type="email" placeholder="Enter email" id="exampleInputEmail2" class="form-control"></div>\n                            <div class="form-group">\n                                <input type="password" placeholder="Password" id="exampleInputPassword2" class="form-control"></div>\n                            <div class="form-group">\n                                <input type="checkbox" class="i-checks">\n                                <label>Remember me</label>\n                            </div>\n                            <button class="btn btn-white" type="submit">Sign in</button>\n                        </form>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Modal form <small>Example of login in modal box</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="text-center">\n                            <a data-toggle="modal" class="btn btn-primary" href="#modal-form">Form in simple modal box</a>\n                        </div>\n                        <div id="modal-form" class="modal fade" aria-hidden="true">\n                            <div class="modal-dialog">\n                                <div class="modal-content">\n                                    <div class="modal-body">\n                                        <div class="row">\n                                            <div class="col-sm-6 b-r"><h3 class="m-t-none m-b">Sign in</h3>\n\n                                                <p>Sign in today for more expirience.</p>\n\n                                                <form role="form">\n                                                    <div class="form-group"><label>Email</label> <input type="email" placeholder="Enter email" class="form-control"></div>\n                                                    <div class="form-group"><label>Password</label> <input type="password" placeholder="Password" class="form-control"></div>\n                                                    <div>\n                                                        <button class="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit"><strong>Log in</strong></button>\n                                                        <label> <input type="checkbox" class="i-checks"> Remember me </label>\n                                                    </div>\n                                                </form>\n                                            </div>\n                                            <div class="col-sm-6"><h4>Not a member?</h4>\n                                                <p>You can create an account:</p>\n                                                <p class="text-center">\n                                                    <a href=""><i class="fa fa-sign-in big-icon"></i></a>\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>All form elements <small>With custom checbox and radion elements.</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <form method="get" class="form-horizontal">\n                            <div class="form-group"><label class="col-sm-2 control-label">Normal</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Help text</label>\n                                <div class="col-sm-10"><input type="text" class="form-control"> <span class="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Password</label>\n\n                                <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Placeholder</label>\n\n                                <div class="col-sm-10"><input type="text" placeholder="placeholder" class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-lg-2 control-label">Disabled</label>\n\n                                <div class="col-lg-10"><input type="text" disabled="" placeholder="Disabled input here..." class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-lg-2 control-label">Static control</label>\n\n                                <div class="col-lg-10"><p class="form-control-static">email@example.com</p></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Checkboxes and radios <br>\n                                <small class="text-navy">Normal Bootstrap elements</small></label>\n\n                                <div class="col-sm-10">\n                                    <div><label> <input type="checkbox" value=""> Option one is this and that&mdash;be sure to include why it\'s great </label></div>\n                                    <div><label> <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios"> Option one is this and that&mdash;be sure to\n                                        include why it\'s great </label></div>\n                                    <div><label> <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios"> Option two can be something else and selecting it will\n                                        deselect option one </label></div>\n                                </div>\n                            </div>\n\n\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Checkboxes and radios <br>\n                                <small class="text-navy">Custom Bootstrap elements</small></label>\n\n                                <div class="col-sm-10">\n\n                                    <div class="checkbox">\n                                        <input type="checkbox" id="checkbox1">\n                                        <label for="checkbox1">\n                                            Check me out\n                                        </label>\n                                    </div>\n                                    <div class="checkbox">\n                                        <input type="checkbox" id="checkbox1" checked="">\n                                        <label for="checkbox1">\n                                            Check me out\n                                        </label>\n                                    </div>\n                                    <div class="radio">\n                                        <input type="radio" id="radio" name="radioOption">\n                                        <label for="radio">\n                                            Check me out\n                                        </label>\n                                    </div>\n                                    <div class="radio">\n                                        <input type="radio" id="radio" checked="" name="radioOption">\n                                        <label for="radio">\n                                            Check me out\n                                        </label>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Inline checkboxes</label>\n\n                                <div class="col-sm-10"><label class="checkbox-inline"> <input type="checkbox" value="option1" id="inlineCheckbox1"> a </label> <label class="checkbox-inline">\n                                    <input type="checkbox" value="option2" id="inlineCheckbox2"> b </label> <label class="checkbox-inline">\n                                    <input type="checkbox" value="option3" id="inlineCheckbox3"> c </label></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Checkboxes &amp; radios <br><small class="text-navy">Custom elements</small></label>\n\n                                <div class="col-sm-10">\n                                    <div class="i-checks"><label> <input type="checkbox" value=""> <i></i> Option one </label></div>\n                                    <div class="i-checks"><label> <input type="checkbox" value="" checked=""> <i></i> Option two checked </label></div>\n                                    <div class="i-checks"><label> <input type="checkbox" value="" disabled="" checked=""> <i></i> Option three checked and disabled </label></div>\n                                    <div class="i-checks"><label> <input type="checkbox" value="" disabled=""> <i></i> Option four disabled </label></div>\n                                    <div class="i-checks"><label> <input type="radio" value="option1" name="a"> <i></i> Option one </label></div>\n                                    <div class="i-checks"><label> <input type="radio" checked="" value="option2" name="a"> <i></i> Option two checked </label></div>\n                                    <div class="i-checks"><label> <input type="radio" disabled="" checked="" value="option2"> <i></i> Option three checked and disabled </label></div>\n                                    <div class="i-checks"><label> <input type="radio" disabled="" name="a"> <i></i> Option four disabled </label></div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Inline checkboxes</label>\n\n                                <div class="col-sm-10"><label class="checkbox-inline i-checks"> <input type="checkbox" value="option1">a </label>\n                                    <label class="checkbox-inline i-checks"> <input type="checkbox" value="option2"> b </label>\n                                    <label class="checkbox-inline i-checks"> <input type="checkbox" value="option3"> c </label></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Select</label>\n\n                                <div class="col-sm-10"><select class="form-control m-b" name="account">\n                                    <option>option 1</option>\n                                    <option>option 2</option>\n                                    <option>option 3</option>\n                                    <option>option 4</option>\n                                </select>\n\n                                    <div class="col-lg-4 m-l-n"><select class="form-control" multiple="">\n                                        <option>option 1</option>\n                                        <option>option 2</option>\n                                        <option>option 3</option>\n                                        <option>option 4</option>\n                                    </select></div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group has-success"><label class="col-sm-2 control-label">Input with success</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group has-warning"><label class="col-sm-2 control-label">Input with warning</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group has-error"><label class="col-sm-2 control-label">Input with error</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control"></div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Control sizing</label>\n\n                                <div class="col-sm-10"><input type="text" placeholder=".input-lg" class="form-control input-lg m-b">\n                                    <input type="text" placeholder="Default input" class="form-control m-b"> <input type="text" placeholder=".input-sm" class="form-control input-sm">\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Column sizing</label>\n\n                                <div class="col-sm-10">\n                                    <div class="row">\n                                        <div class="col-md-2"><input type="text" placeholder=".col-md-2" class="form-control"></div>\n                                        <div class="col-md-3"><input type="text" placeholder=".col-md-3" class="form-control"></div>\n                                        <div class="col-md-4"><input type="text" placeholder=".col-md-4" class="form-control"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Input groups</label>\n\n                                <div class="col-sm-10">\n                                    <div class="input-group m-b"><span class="input-group-addon">@</span> <input type="text" placeholder="Username" class="form-control"></div>\n                                    <div class="input-group m-b"><input type="text" class="form-control"> <span class="input-group-addon">.00</span></div>\n                                    <div class="input-group m-b"><span class="input-group-addon">$</span> <input type="text" class="form-control"> <span class="input-group-addon">.00</span></div>\n                                    <div class="input-group m-b"><span class="input-group-addon"> <input type="checkbox"> </span> <input type="text" class="form-control"></div>\n                                    <div class="input-group"><span class="input-group-addon"> <input type="radio"> </span> <input type="text" class="form-control"></div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Button addons</label>\n\n                                <div class="col-sm-10">\n                                    <div class="input-group m-b"><span class="input-group-btn">\n                                            <button type="button" class="btn btn-primary">Go!</button> </span> <input type="text" class="form-control">\n                                    </div>\n                                    <div class="input-group"><input type="text" class="form-control"> <span class="input-group-btn"> <button type="button" class="btn btn-primary">Go!\n                                    </button> </span></div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">With dropdowns</label>\n\n                                <div class="col-sm-10">\n                                    <div class="input-group m-b">\n                                        <div class="input-group-btn">\n                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button">Action <span class="caret"></span></button>\n                                            <ul class="dropdown-menu">\n                                                <li><a href="#">Action</a></li>\n                                                <li><a href="#">Another action</a></li>\n                                                <li><a href="#">Something else here</a></li>\n                                                <li class="divider"></li>\n                                                <li><a href="#">Separated link</a></li>\n                                            </ul>\n                                        </div>\n                                        <input type="text" class="form-control"></div>\n                                    <div class="input-group"><input type="text" class="form-control">\n\n                                        <div class="input-group-btn">\n                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button">Action <span class="caret"></span></button>\n                                            <ul class="dropdown-menu pull-right">\n                                                <li><a href="#">Action</a></li>\n                                                <li><a href="#">Another action</a></li>\n                                                <li><a href="#">Something else here</a></li>\n                                                <li class="divider"></li>\n                                                <li><a href="#">Separated link</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Segmented</label>\n\n                                <div class="col-sm-10">\n                                    <div class="input-group m-b">\n                                        <div class="input-group-btn">\n                                            <button tabindex="-1" class="btn btn-white" type="button">Action</button>\n                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button"><span class="caret"></span></button>\n                                            <ul class="dropdown-menu">\n                                                <li><a href="#">Action</a></li>\n                                                <li><a href="#">Another action</a></li>\n                                                <li><a href="#">Something else here</a></li>\n                                                <li class="divider"></li>\n                                                <li><a href="#">Separated link</a></li>\n                                            </ul>\n                                        </div>\n                                        <input type="text" class="form-control"></div>\n                                    <div class="input-group"><input type="text" class="form-control">\n\n                                        <div class="input-group-btn">\n                                            <button tabindex="-1" class="btn btn-white" type="button">Action</button>\n                                            <button data-toggle="dropdown" class="btn btn-white dropdown-toggle" type="button"><span class="caret"></span></button>\n                                            <ul class="dropdown-menu pull-right">\n                                                <li><a href="#">Action</a></li>\n                                                <li><a href="#">Another action</a></li>\n                                                <li><a href="#">Something else here</a></li>\n                                                <li class="divider"></li>\n                                                <li><a href="#">Separated link</a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="hr-line-dashed"></div>\n                            <div class="form-group">\n                                <div class="col-sm-4 col-sm-offset-2">\n                                    <button class="btn btn-white" type="submit">Cancel</button>\n                                    <button class="btn btn-primary" type="submit">Save changes</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
