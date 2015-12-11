<?php

/**
 * (c) Spryker Systems GmbH copyright protected
 */

namespace Pyz\Yves\Application\Business\Model;

use SprykerEngine\Shared\Config;
use SprykerFeature\Shared\Session\Business\Model\SessionFactory as SharedSessionFactory;
use SprykerFeature\Shared\Application\ApplicationConstants;

class SessionFactory extends SharedSessionFactory
{

    /**
     * @return int
     */
    protected function getSessionLifetime()
    {
        $lifetime = (int) Config::get(ApplicationConstants::YVES_STORAGE_SESSION_TIME_TO_LIVE);

        return $lifetime;
    }

}
