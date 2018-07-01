
        window.DEBUG = 1;
        require('i18n/core');
        require('common/css/animate.css');
        require('common/css/normalize.css');
        require('common/css/common.css');
        require('common/css/main.css');
        require('common/css/icon.css');
        require('common/css/grid.css');
        var param = require("common/lang/Object").fromQueryString(location.search.substring(1));

        param.m = param.m || 'mod-index/index';
        param.m = param.m[0] === '/' ? param.m.substring(1) : param.m
        if (param.m === 'mod-index/index') {
            import(/* webpackChunkName: "mod-index-_-index" */ 'home/mod-index/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vm/index') {
            import(/* webpackChunkName: "mod-vm-_-index" */ 'home/mod-vm/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/index') {
            import(/* webpackChunkName: "mod-vnet-_-index" */ 'home/mod-vnet/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-entity/entity') {
            import(/* webpackChunkName: "mod-entity-_-entity" */ 'home/mod-entity/entity').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/main/index') {
            import(/* webpackChunkName: "mod-setting-_-main-_-index" */ 'home/mod-setting/main/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-console/index') {
            import(/* webpackChunkName: "mod-console-_-index" */ 'home/mod-console/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/log-alert/index') {
            import(/* webpackChunkName: "mod-setting-_-log-alert-_-index" */ 'home/mod-setting/log-alert/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vm-summary/index') {
            import(/* webpackChunkName: "mod-vm-summary-_-index" */ 'home/mod-vm-summary/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-storage/volume-detail/index') {
            import(/* webpackChunkName: "mod-storage-_-volume-detail-_-index" */ 'home/mod-storage/volume-detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vmware-summary/index') {
            import(/* webpackChunkName: "mod-vmware-summary-_-index" */ 'home/mod-vmware-summary/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/vmware/vcenter-detail/index') {
            import(/* webpackChunkName: "mod-setting-_-vmware-_-vcenter-detail-_-index" */ 'home/mod-setting/vmware/vcenter-detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-computer/index') {
            import(/* webpackChunkName: "mod-computer-_-index" */ 'home/mod-computer/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/support/index') {
            import(/* webpackChunkName: "mod-setting-_-support-_-index" */ 'home/mod-setting/support/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/serial/index') {
            import(/* webpackChunkName: "mod-setting-_-serial-_-index" */ 'home/mod-setting/serial/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-storage/index') {
            import(/* webpackChunkName: "mod-storage-_-index" */ 'home/mod-storage/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/workflow/new/index') {
            import(/* webpackChunkName: "mod-setting-_-workflow-_-new-_-index" */ 'home/mod-setting/workflow/new/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/dev/web/index') {
            import(/* webpackChunkName: "mod-vnet-_-dev-_-web-_-index" */ 'home/mod-vnet/dev/web/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/dev/template/index') {
            import(/* webpackChunkName: "mod-vnet-_-dev-_-template-_-index" */ 'home/mod-vnet/dev/template/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/usermgr/index') {
            import(/* webpackChunkName: "mod-setting-_-usermgr-_-index" */ 'home/mod-setting/usermgr/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/update/index') {
            import(/* webpackChunkName: "mod-setting-_-update-_-index" */ 'home/mod-setting/update/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-upd-iso/index') {
            import(/* webpackChunkName: "mod-upd-iso-_-index" */ 'home/mod-upd-iso/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-stg-manage/index') {
            import(/* webpackChunkName: "mod-stg-manage-_-index" */ 'home/mod-stg-manage/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/cluster-function/index') {
            import(/* webpackChunkName: "mod-setting-_-cluster-function-_-index" */ 'home/mod-setting/cluster-function/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/monitor-center/index') {
            import(/* webpackChunkName: "mod-setting-_-monitor-center-_-index" */ 'home/mod-setting/monitor-center/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/vm-backup/index') {
            import(/* webpackChunkName: "mod-setting-_-vm-backup-_-index" */ 'home/mod-setting/vm-backup/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/recycle-bin/index') {
            import(/* webpackChunkName: "mod-setting-_-recycle-bin-_-index" */ 'home/mod-setting/recycle-bin/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vm-export/index') {
            import(/* webpackChunkName: "mod-vm-export-_-index" */ 'home/mod-vm-export/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vm-export/loading') {
            import(/* webpackChunkName: "mod-vm-export-_-loading" */ 'home/mod-vm-export/loading').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-computer/hci/oracle-guide/index') {
            import(/* webpackChunkName: "mod-computer-_-hci-_-oracle-guide-_-index" */ 'home/mod-computer/hci/oracle-guide/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vmware-console/index') {
            import(/* webpackChunkName: "mod-vmware-console-_-index" */ 'home/mod-vmware-console/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-welcome/console/index') {
            import(/* webpackChunkName: "mod-welcome-_-console-_-index" */ 'home/mod-welcome/console/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-entity/host-info/index') {
            import(/* webpackChunkName: "mod-entity-_-host-info-_-index" */ 'home/mod-entity/host-info/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/vs-check/index') {
            import(/* webpackChunkName: "mod-setting-_-vs-check-_-index" */ 'home/mod-setting/vs-check/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-welcome/index') {
            import(/* webpackChunkName: "mod-welcome-_-index" */ 'home/mod-welcome/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-policy/network-policy') {
            import(/* webpackChunkName: "mod-policy-_-network-policy" */ 'home/mod-policy/network-policy').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/vmware/host-detail/index') {
            import(/* webpackChunkName: "mod-setting-_-vmware-_-host-detail-_-index" */ 'home/mod-setting/vmware/host-detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-setting/workflow/history/index') {
            import(/* webpackChunkName: "mod-setting-_-workflow-_-history-_-index" */ 'home/mod-setting/workflow/history/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-entity/store-detail/index') {
            import(/* webpackChunkName: "mod-entity-_-store-detail-_-index" */ 'home/mod-entity/store-detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-storage/overview/task-status/index') {
            import(/* webpackChunkName: "mod-storage-_-overview-_-task-status-_-index" */ 'home/mod-storage/overview/task-status/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vs/diskDetail/diskDetail') {
            import(/* webpackChunkName: "mod-vs-_-diskDetail-_-diskDetail" */ 'home/mod-vs/diskDetail/diskDetail').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vs-detail/index') {
            import(/* webpackChunkName: "mod-vs-detail-_-index" */ 'home/mod-vs-detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/common/detail/capture/index') {
            import(/* webpackChunkName: "mod-vnet-_-common-_-detail-_-capture-_-index" */ 'home/mod-vnet/common/detail/capture/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/ping/index') {
            import(/* webpackChunkName: "mod-vnet-_-ping-_-index" */ 'home/mod-vnet/ping/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/firewall/index') {
            import(/* webpackChunkName: "mod-vnet-_-firewall-_-index" */ 'home/mod-vnet/firewall/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/boundary-switch/detail/index') {
            import(/* webpackChunkName: "mod-vnet-_-boundary-switch-_-detail-_-index" */ 'home/mod-vnet/boundary-switch/detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet/router/detail/index') {
            import(/* webpackChunkName: "mod-vnet-_-router-_-detail-_-index" */ 'home/mod-vnet/router/detail/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vnet-detail/dev/index') {
            import(/* webpackChunkName: "mod-vnet-detail-_-dev-_-index" */ 'home/mod-vnet-detail/dev/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-vs/index') {
            import(/* webpackChunkName: "mod-vs-_-index" */ 'home/mod-vs/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-welcome/docs/index') {
            import(/* webpackChunkName: "mod-welcome-_-docs-_-index" */ 'home/mod-welcome/docs/index').then(() => {
                require('home/mod-launch/fire');
            });
        } if (param.m === 'mod-welcome/business/index') {
            import(/* webpackChunkName: "mod-welcome-_-business-_-index" */ 'home/mod-welcome/business/index').then(() => {
                require('home/mod-launch/fire');
            });
        }
        