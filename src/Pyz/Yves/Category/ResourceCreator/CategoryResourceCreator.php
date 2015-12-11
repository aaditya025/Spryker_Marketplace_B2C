<?php

/**
 * (c) Spryker Systems GmbH copyright protected
 */

namespace Pyz\Yves\Category\ResourceCreator;

use Pyz\Yves\Collector\Creator\ResourceCreatorInterface;
use Silex\Application;
use SprykerEngine\Shared\Kernel\LocatorLocatorInterface;
use SprykerFeature\Shared\Application\Communication\ControllerServiceBuilder;
use SprykerEngine\Yves\Kernel\BundleControllerAction;
use SprykerEngine\Yves\Kernel\Controller\BundleControllerActionRouteNameResolver;
use SprykerEngine\Yves\Kernel\ControllerLocator;
use SprykerFeature\Shared\Category\CategoryConstants;

class CategoryResourceCreator implements ResourceCreatorInterface
{

    /**
     * @var LocatorLocatorInterface
     */
    protected $locator;

    /**
     * @param LocatorLocatorInterface $locator
     */
    public function __construct(LocatorLocatorInterface $locator)
    {
        $this->locator = $locator;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return CategoryConstants::RESOURCE_TYPE_CATEGORY_NODE;
    }

    /**
     * @param Application $app
     * @param array $data
     *
     * @return array
     */
    public function createResource(Application $app, array $data)
    {
        $bundleControllerAction = new BundleControllerAction('Catalog', 'Catalog', 'index');
        $controllerResolver = new ControllerLocator($bundleControllerAction);
        $routeResolver = new BundleControllerActionRouteNameResolver($bundleControllerAction);

        $service = (new ControllerServiceBuilder())->createServiceForController(
            $app,
            $this->locator,
            $bundleControllerAction,
            $controllerResolver,
            $routeResolver
        );

        return [
            '_controller' => $service,
            '_route' => $routeResolver->resolve(),
            'categoryNode' => $data,
        ];
    }

}
