;
export function productExtendPreviewClick(num) {
  const TARGET_PREVIEW = 'product-extend-preview';
  const TARGET_STAGE = 'product-extend-stage';
  const PREVIEW_ACTIVE_CLASS = 'b-products-columns-extend__right-item_active';
  var previews = document.querySelectorAll('[' + TARGET_PREVIEW + ']'),
    stages = document.querySelectorAll('[' + TARGET_STAGE + ']');

  if (previews.length === 0) {
    return;
  }

  function clickPreview(el) {
    var index = el.getAttribute('data-index'),
      target = el.getAttribute(TARGET_PREVIEW);

    previewReset(previews, index);

    [].forEach.call(stages, function (el, i) {
      if (i == index) {
        el.classList.add(target);
      } else if (el.classList.contains(target)) {
        el.classList.remove(target);
      }
    });

  }

  function previewsFor(items) {
    [].forEach.call(items, function (el, i) {
      el.onclick = function (e) {
        clickPreview(el);
      };
      /** Manually calling click may cause errors in styler behavior */
      if (el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        clickPreview(el);
      } else if (i == num) {
        clickPreview(el);
      }
    });
  }

  function previewReset(items, index) {
    [].forEach.call(items, function (el, i) {
      if (i == index && el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        return;
      }

      if (i == index) {
        el.classList.add(PREVIEW_ACTIVE_CLASS);
      } else if (el.classList.contains(PREVIEW_ACTIVE_CLASS)) {
        el.classList.remove(PREVIEW_ACTIVE_CLASS);
      }
    });
  }

  previewsFor(previews);

}

productExtendPreviewClick(0);
