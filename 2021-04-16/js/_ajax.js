$(function() {
    const periodicTable = {
        $url: "https://raw.githubusercontent.com/Weslley-Borges/periodic-table/master/src/elements.json",
        $templateElement: `
            <div class="element">
                <input class="activate" type="radio" name="elements" />
                <input class="deactivate" type="radio" name="elements" checked="true" />
                <div class="square">
                    <div class="atomic-number"></div>
                    <div class="label">
                        <div class="symbol"></div>
                        <div class="name"></div>
                    </div>
                    <div class="atomic-mass"></div>
                </div>
            </div>
        `,
        $elementsNextHere: $('.overlay'),
        $jsonElements: '',
        $familyPlace: $('.c-family'),

        init: function() {
            $templateElement = this.$templateElement;
            $elementsNextHere = this.$elementsNextHere;
            $familyPlace = this.$familyPlace;

            function addElement(element) {
                let $newElement = $($templateElement);
                $newElement.addClass(element.family).addClass('c' + element.position[0]).addClass('r' + element.position[1]);
                $newElement.find('.activate').attr('data-element', element.name);
                $newElement.find('.atomic-number').text(element.id);
                $newElement.find('.symbol').text(element.symbol);
                $newElement.find('.name').text(element.name);
                $newElement.find('.atomic-mass').text(element.atomicMass)

                $newElement.insertAfter($elementsNextHere);
            };

            function makeFunctions() {
                function openModal(e) {
                    $target = e.target;
                    $targetElement = $target.getAttribute('data-element');
                    $position = '';

                    $.each($jsonElements, function(i, val) {
                        if ($jsonElements[i].name == $targetElement) {
                            $position = i;
                            return false;
                        }
                    });

                    $modal = $('.popup');
                    $modal.find('img').attr('src', $jsonElements[$position].image).attr('alt', $jsonElements[$position].name);

                    $modal.find('.c-name').text($jsonElements[$position].name + ' - ' + $jsonElements[$position].symbol)
                    $modal.find('.c-famName').text($jsonElements[$position].family.includes('_') ? $jsonElements[$position].family.replace(/_/g, " ") : $jsonElements[$position].family)

                    $modal.find('.data_desc').text($jsonElements[$position].desc);
                    $modal.find('.data_uses').text($jsonElements[$position].uses);

                    $modalFather = $('.c-modal');
                    $modalFather.removeClass('modal-close').addClass('modal-open');
                }

                function closeModal() {
                    $modal = $('.popup');
                    $modal.find('img').attr('src', '')

                    $modalFather = $('.c-modal');
                    $modalFather.addClass('modal-close').removeClass('modal-open');
                }

                function filter(e) {
                    $familyFilter = e.target;
                    $familyFilter = $familyFilter.getAttribute('for');

                    $actualFilter = $familyPlace.attr('family');

                    if ($actualFilter == $familyFilter) {
                        $familyPlace.attr('family', 'all-families');
                    } else {
                        $familyPlace.attr('family', $familyFilter);
                    }
                }

                $openModal = $('.activate');
                $closeModal = $('.deactivate');
                $closeModalBtn = $('.close-popup-button');

                $openModal.on('click', function(e) { openModal(e) });
                $closeModal.on('click', function() { closeModal() });
                $closeModalBtn.on('click', function() {
                    $closeModal[0].checked = "true";
                    closeModal();
                });

                $filterBtn = $('.family-filter');
                $filterBtn.on('click', function(e) { filter(e) })
            };

            $.ajax({
                url: this.$url,
                method: 'GET',
                dataType: 'json',
                success: function(success) {
                    $jsonElements = success;

                    $.each($elementList, function(i, val) {
                        return addElement(val);
                    });

                    return makeFunctions();
                }
            })
        },
    };

    periodicTable.init()
})