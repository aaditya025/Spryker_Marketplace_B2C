<?php

namespace Pyz\Glue\WishlistsRestApi;

use Spryker\Glue\MerchantProductOfferWishlistRestApi\Plugin\Wishlist\ProductOfferRestWishlistItemsAttributesMapperPlugin;
use Spryker\Glue\ProductAvailabilitiesRestApi\Plugin\Wishlist\ProductAvailabilityRestWishlistItemsAttributesMapperPlugin;
use Spryker\Glue\ProductPricesRestApi\Plugin\Wishlist\ProductPriceRestWishlistItemsAttributesMapperPlugin;
use Spryker\Glue\WishlistsRestApi\WishlistsRestApiDependencyProvider as SprykerWishlistsRestApiDependencyProvider;

class WishlistsRestApiDependencyProvider extends SprykerWishlistsRestApiDependencyProvider
{
    /**
     * @return \Spryker\Glue\WishlistsRestApiExtension\Dependency\Plugin\RestWishlistItemsAttributesMapperPluginInterface[]
     */
    protected function getRestWishlistItemsAttributesMapperPlugins(): array
    {
        return [
            new ProductPriceRestWishlistItemsAttributesMapperPlugin(),
            new ProductAvailabilityRestWishlistItemsAttributesMapperPlugin(),
            new ProductOfferRestWishlistItemsAttributesMapperPlugin(),
        ];
    }
}