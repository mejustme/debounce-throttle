import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  mounted: function  () {
    $(document).ready(function () {
      var allEvents = $('#allEvents'),

        divDebounce_false_true = $('#debounce_false_true'),
        divDebounce_true_false = $('#debounce_true_false'),
        // divDebounce_false_false = $('#debounce_false_false'),
        divDebounce_true_true = $('#debounce_true_true'),

        divThrottle_true_true = $('#throttle_true_true'),
        // divThrottle_false_false = $('#throttle_false_false'),
        divThrottle_true_false = $('#throttle_true_false'),
        divThrottle_false_true = $('#throttle_false_true'),

        sidebar_mousemove = $('#sidebar-free'),

        counter = 0,
        next_color = 0,
        drawing,
        drawing_automated,
        lazy_Debounce_Events,

        lazyDebounce_false_true,
        lazyDebounce_true_false,
        lazyDebounce_false_false,
        lazyDebounce_true_true,

        lazyThrottle_true_true,
        lazyThrottle_false_false,
        lazyThrottle_true_false,
        lazyThrottle_false_true;

      function update (div, color, type) {
        if(counter > 60 && type == 'lazyThrottle_true_false') return  // 已结束不覆盖
        var lastChild = div[0].lastChild
        lastChild.className = 'color' + color
        lastChild.innerHTML = color
      }

      function setup_lazy_functions (_) {

        lazy_Debounce_Events = _.throttle(updateEvents, 50, {
          leading: true,
          trailing: true
        });


        // 默认
        lazyDebounce_false_true = _.debounce(update, 200, {
          leading: false,
          trailing: true
        })

        lazyDebounce_true_false = _.debounce(update, 200, {
          leading: true,
          trailing: false
        })

        lazyDebounce_true_true = _.debounce(update, 200, {
          leading: true,
          trailing: true
        })

        // lazyDebounce_false_false = _.debounce(update, 200, {
        //   leading: false,
        //   trailing: false
        // })


        lazyThrottle_true_true = _.throttle(update, 200, {
          leading: true,
          trailing: true
        })

        // lazyThrottle_false_false = _.throttle(update, 200, {
        //   leading: false,
        //   trailing: false
        // })

        lazyThrottle_true_false = _.throttle(update, 200, {
          leading: true,
          trailing: false
        })

        lazyThrottle_false_true = _.throttle(update, 200, {
          leading: false,
          trailing: true
        })
      }

      function updateEvents () {
        update(allEvents, next_color)
        lazyDebounce_false_true(divDebounce_false_true, next_color)
        lazyDebounce_true_false(divDebounce_true_false, next_color)
        // lazyDebounce_false_false(divDebounce_false_false, next_color)
        lazyDebounce_true_true(divDebounce_true_true, next_color)

        lazyThrottle_false_true(divThrottle_false_true, next_color)
        lazyThrottle_true_false(divThrottle_true_false, next_color, 'lazyThrottle_true_false')
        // lazyThrottle_false_false(divThrottle_false_false, next_color)
        lazyThrottle_true_true(divThrottle_true_true, next_color)

        next_color++
        if (next_color > 9) {
          next_color = 0
        }
      }


      function reset () {
        allEvents.html('<span></span>')
        divDebounce_false_true.html('<span></span>')
        divDebounce_true_false.html('<span></span>')
        // divDebounce_false_false.html('<span></span>')
        divDebounce_true_true.html('<span></span>')

        divThrottle_false_true.html('<span></span>')
        divThrottle_true_false.html('<span></span>')
        // divThrottle_false_false.html('<span></span>')
        divThrottle_true_true.html('<span></span>')
        next_color = 0
        counter = 0
        clearInterval(drawing_automated)
        clearInterval(drawing)
      }
      window.start = function () {
        setup_lazy_functions(_)
        sidebar_mousemove.off('mousemove').on('mousemove', function () {
          lazy_Debounce_Events()
        })

        sidebar_mousemove.off('mouseenter').on('mouseenter', function () {
          reset()
          draw()
        })
      }
      var draw = function () {
        drawing = setInterval(function () {
          counter++
          allEvents[0].appendChild(document.createElement('span'))

          divDebounce_false_true[0].appendChild(document.createElement('span'))
          divDebounce_true_false[0].appendChild(document.createElement('span'))
          // divDebounce_false_false[0].appendChild(document.createElement('span'))
          divDebounce_true_true[0].appendChild(document.createElement('span'))

          divThrottle_false_true[0].appendChild(document.createElement('span'))
          divThrottle_true_false[0].appendChild(document.createElement('span'))
          // divThrottle_false_false[0].appendChild(document.createElement('span'))
          divThrottle_true_true[0].appendChild(document.createElement('span'))

          if (counter > 60) {
            clearInterval(drawing)
            clearInterval(drawing_automated)
          }
        }, 50)
      }
    })
  }
})

