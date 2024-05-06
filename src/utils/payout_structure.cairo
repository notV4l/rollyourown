// https://www.wsop.com/how-to-play-poker/mtt-tournament-payouts/
// MTT Payout Structure (top 10% paid)

// TODO add more payout & add binary search

fn get_payout(rank: u32,entrants: u32) -> u32 {
    if entrants <= 200 {
        if entrants <= 2 {
            payout_0_2(rank)
        } else if entrants <= 10 {
            payout_3_10(rank)
        } else if entrants <= 30 {
            payout_11_30(rank)
        } else if entrants <= 50 {
            payout_31_50(rank)
        } else if entrants <= 75 {
            payout_51_75(rank)
        } else if entrants <= 100 {
            payout_76_100(rank)
        } else if entrants <= 150 {
            payout_101_150(rank)
        } else {
            payout_151_200(rank)
        }
    } else {
        if entrants <= 250 {
            payout_201_250(rank)
        } else if entrants <= 300 {
            payout_251_300(rank)
        } else if entrants <= 350 {
            payout_301_350(rank)
        } else if entrants <= 400 {
            payout_351_400(rank)
        } else {
            payout_401_500(rank)
        }
    }
}

fn payout_0_2(rank: u32) -> u32 {
    if rank == 1 {
        10000
    } else {
        0
    }
}

fn payout_3_10(rank: u32) -> u32 {
    if rank == 1 {
        7000
    } else if rank == 2 {
        3000
    } else {
        0
    }
}

fn payout_11_30(rank: u32) -> u32 {
    if rank == 1 {
        5000
    } else if rank == 2 {
        3000
    } else if rank == 3 {
        2000
    } else {
        0
    }
}

fn payout_31_50(rank: u32) -> u32 {
    if rank == 1 {
        3700
    } else if rank == 2 {
        2500
    } else if rank == 3 {
        1500
    } else if rank == 4 {
        1200
    } else if rank == 5 {
        1100
    } else {
        0
    }
}

fn payout_51_75(rank: u32) -> u32 {
    if rank == 1 {
        3100
    } else if rank == 2 {
        2100
    } else if rank == 3 {
        1300
    } else if rank == 4 {
        1000
    } else if rank == 5 {
        850
    } else if rank == 6 {
        650
    } else if rank == 7 {
        550
    } else if rank == 8 {
        450
    } else {
        0
    }
}

fn payout_76_100(rank: u32) -> u32 {
    if rank == 1 {
        3000
    } else if rank == 2 {
        2000
    } else if rank == 3 {
        1200
    } else if rank == 4 {
        950
    } else if rank == 5 {
        800
    } else if rank == 6 {
        600
    } else if rank == 7 {
        500
    } else if rank == 8 {
        400
    } else if rank == 9 {
        300
    } else if rank == 10 {
        250
    } else {
        0
    }
}

fn payout_101_150(rank: u32) -> u32 {
    if rank == 1 {
        2800
    } else if rank == 2 {
        1700
    } else if rank == 3 {
        1060
    } else if rank == 4 {
        860
    } else if rank == 5 {
        760
    } else if rank == 6 {
        530
    } else if rank == 7 {
        430
    } else if rank == 8 {
        330
    } else if rank == 9 {
        270
    } else if rank <= 15 {
        210
    } else {
        0
    }
}

fn payout_151_200(rank: u32) -> u32 {
    if rank == 1 {
        2700
    } else if rank == 2 {
        1600
    } else if rank == 3 {
        1000
    } else if rank == 4 {
        800
    } else if rank == 5 {
        700
    } else if rank == 6 {
        490
    } else if rank == 7 {
        390
    } else if rank == 8 {
        290
    } else if rank == 9 {
        240
    } else if rank <= 15 {
        190
    } else if rank <= 20 {
        130
    } else {
        0
    }
}

fn payout_201_250(rank: u32) -> u32 {
    if rank == 1 {
        2650
    } else if rank == 2 {
        1550
    } else if rank == 3 {
        980
    } else if rank == 4 {
        780
    } else if rank == 5 {
        680
    } else if rank == 6 {
        460
    } else if rank == 7 {
        360
    } else if rank == 8 {
        280
    } else if rank == 9 {
        220
    } else if rank <= 15 {
        165
    } else if rank <= 20 {
        110
    } else if rank <= 25 {
        100
    } else {
        0
    }
}

fn payout_251_300(rank: u32) -> u32 {
    if rank == 1 {
        2600
    } else if rank == 2 {
        1500
    } else if rank == 3 {
        960
    } else if rank == 4 {
        760
    } else if rank == 5 {
        660
    } else if rank == 6 {
        450
    } else if rank == 7 {
        350
    } else if rank == 8 {
        260
    } else if rank == 9 {
        210
    } else if rank <= 15 {
        150
    } else if rank <= 20 {
        100
    } else if rank <= 25 {
        90
    } else if rank <= 30 {
        80
    } else {
        0
    }
}

fn payout_301_350(rank: u32) -> u32 {
    if rank == 1 {
        2550
    } else if rank == 2 {
        1475
    } else if rank == 3 {
        940
    } else if rank == 4 {
        740
    } else if rank == 5 {
        640
    } else if rank == 6 {
        440
    } else if rank == 7 {
        340
    } else if rank == 8 {
        240
    } else if rank == 9 {
        195
    } else if rank <= 15 {
        140
    } else if rank <= 20 {
        95
    } else if rank <= 25 {
        85
    } else if rank <= 30 {
        75
    } else if rank <= 35 {
        65
    } else {
        0
    }
}

fn payout_351_400(rank: u32) -> u32 {
    if rank == 1 {
        2500
    } else if rank == 2 {
        1450
    } else if rank == 3 {
        920
    } else if rank == 4 {
        720
    } else if rank == 5 {
        620
    } else if rank == 6 {
        430
    } else if rank == 7 {
        330
    } else if rank == 8 {
        230
    } else if rank == 9 {
        185
    } else if rank <= 15 {
        140
    } else if rank <= 20 {
        90
    } else if rank <= 25 {
        80
    } else if rank <= 30 {
        70
    } else if rank <= 35 {
        60
    } else if rank <= 40 {
        55
    } else {
        0
    }
}

fn payout_401_500(rank: u32) -> u32 {
    if rank == 1 {
        2450
    } else if rank == 2 {
        1425
    } else if rank == 3 {
        900
    } else if rank == 4 {
        700
    } else if rank == 5 {
        600
    } else if rank == 6 {
        420
    } else if rank == 7 {
        320
    } else if rank == 8 {
        220
    } else if rank == 9 {
        165
    } else if rank <= 15 {
        125
    } else if rank <= 20 {
        85
    } else if rank <= 25 {
        75
    } else if rank <= 30 {
        65
    } else if rank <= 35 {
        55
    } else if rank <= 40 {
        50
    } else if rank <= 50 {
        40
    } else {
        0
    }
}


#[cfg(test)]
mod tests {
    use super::{
        get_payout, payout_0_2, payout_3_10, payout_11_30, payout_31_50, payout_51_75,
        payout_76_100, payout_101_150, payout_151_200, payout_201_250, payout_251_300,
        payout_301_350, payout_351_400, payout_401_500
    };

    #[test]
    fn test_get_payout() {
        assert(get_payout(1,2) == 10000, 'invalid 1,2');
        assert(get_payout(2,2) == 0, 'invalid 2,2');

        assert(get_payout(4,151) == 800, 'invalid 4,151');
        assert(get_payout(8,220) == 280, 'invalid 8,220');

        assert(get_payout(2,600) == 1425, 'invalid 2,600');
    }

    #[test]
    fn test_payout_0_2() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_0_2(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_3_10() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_3_10(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_11_30() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_11_30(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_31_50() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_31_50(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_51_75() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_51_75(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_76_100() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_76_100(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_101_150() {
        let mut rank = 1;
        let mut max = 20;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_101_150(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_151_200() {
        let mut rank = 1;
        let mut max = 25;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_151_200(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_201_250() {
        let mut rank = 1;
        let mut max = 30;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_201_250(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_251_300() {
        let mut rank = 1;
        let mut max = 40;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_251_300(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_301_350() {
        let mut rank = 1;
        let mut max = 50;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_301_350(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_351_400() {
        let mut rank = 1;
        let mut max = 50;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_351_400(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }

    #[test]
    fn test_payout_401_500() {
        let mut rank = 1;
        let mut max = 60;
        let mut total = 0;

        loop {
            if rank == max {
                break;
            }

            let payout = payout_401_500(rank);
            total += payout;
            rank += 1;
        };

        assert(total == 10000, 'invalid total !')
    }
}

