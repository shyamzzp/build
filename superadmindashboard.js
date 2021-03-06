// based ready dom, initialize echarts instance 
var myChart2 = echarts.init(document.getElementById('main'));

var option2 = {
    title: {
        text: 'Admin Dashboard Analytics - Total Customers',
        subtext: 'Anaylytics - Customer/Devices/Maintenance',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Active Customer', 'Deactivated', 'Deleted Customers']
    },
    series: [
        {
            name: 'Access Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 30, name: 'Active Customer' },
                { value: 50, name: 'Deactivated' },
                { value: 20, name: 'Deleted Customers' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'

                }
            }
        }
    ]
};
var optionDevices = {
    title: {
        text: 'Admin Dashboard Analytics',
        subtext: 'Anaylytics - Customer/Devices/Maintenance',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Active Customer', 'Deactivated', 'Total Customers', 'Deleted Customers', 'Total Devices', 'Ready to Supply', 'Supplied', 'Unavailable Devices', 'Installed Devices', 'Commissioned Devices', 'Under Maintenance Device Count']
    },
    series: [
        {
            name: 'Access Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 0.6, name: 'Input Power Failure' },
                { value: 1.2, name: 'On CCMS' },
                { value: 98.2, name: 'Auto - OFF' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'

                }
            }
        }
    ]
};
myChart2.setOption(option2);