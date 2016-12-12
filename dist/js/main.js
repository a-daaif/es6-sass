(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define('main', ['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.main = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    Object.defineProperty(exports, '__esModule', { value: true });

    var Person = function () {
        function Person(name) {
            _classCallCheck(this, Person);

            this._name = name;
        }

        _createClass(Person, [{
            key: 'toString',
            value: function toString() {
                return 'Person : name = ' + this.name;
            }
        }, {
            key: 'name',
            get: function get() {
                return this._name;
            },
            set: function set(name) {
                this._name = name;
            }
        }]);

        return Person;
    }();

    var Employe = function (_Person) {
        _inherits(Employe, _Person);

        function Employe(id, name) {
            _classCallCheck(this, Employe);

            var _this = _possibleConstructorReturn(this, (Employe.__proto__ || Object.getPrototypeOf(Employe)).call(this, name));

            _this._id = id;
            return _this;
        }

        _createClass(Employe, [{
            key: 'toString',
            value: function toString() {
                return 'Employe : name = ' + this.name + ', id = ' + this.id;
            }
        }, {
            key: 'id',
            get: function get() {
                return this._id;
            }
        }]);

        return Employe;
    }(Person);

    exports.Person = Person;
    exports.Employe = Employe;
});