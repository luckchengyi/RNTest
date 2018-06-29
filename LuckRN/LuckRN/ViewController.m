//
//  ViewController.m
//  LuckRN
//
//  Created by 高程宜 on 2018/6/26.
//  Copyright © 2018年 高程宜. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
@interface ViewController ()

@property (nonatomic, strong) NSDictionary *props;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //你可拉倒吧
    // Do any additional setup after loading the view, typically from a nib.
    self.props =   @{ @"scores" : @[
                              @{
                                  @"name" : @"Alex",
                                  @"des": @"hello，我是从原生传递给RN界面的参数"
                                  }
                              ]
                      };
    
    
    UIButton *btn = [[UIButton alloc]initWithFrame:CGRectMake((self.view.bounds.size.width - 300)/2, 200, 300, 40)];
    [btn setTitle:@"点我进入react native界面" forState:UIControlStateNormal];
    [btn setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    
    [btn addTarget:self action:@selector(highScoreButtonPressed) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
}

- (void)highScoreButtonPressed{
    NSURL *jsCodeLocation;
    
#ifdef DEBUG
//    开发的时候用，需要打开本地服务器
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
#else
    //    发布APP的时候用
    jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"jsbundle"];
#endif
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                                                 moduleName        : @"RNHighScores"
                                                 initialProperties : self.props  //将native数据传送到RN中
                                                 launchOptions     : nil];
    
    rootView.frame = [UIScreen mainScreen].bounds;
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view.backgroundColor = [UIColor redColor];
    [vc.view addSubview:rootView];
    [self presentViewController:vc animated:YES completion:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
