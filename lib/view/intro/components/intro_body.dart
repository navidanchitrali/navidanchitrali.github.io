import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import '../../../res/constants.dart';
import '../../../view model/responsive.dart';
import 'image_container.dart';
import 'combine_subtitle.dart';
import 'description_text.dart';
import 'download_button.dart';
import 'headline_text.dart';

class IntroBody extends StatelessWidget {
  const IntroBody({super.key});
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.sizeOf(context);
    return Container(
      height: size.height,
      decoration: const BoxDecoration(
        image: DecorationImage(
          fit: BoxFit.cover,
          image: NetworkImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dc8OQA0bQokkuFtYTR0Du2z9rui_W7UZzg&s'))
      ),
      child: Padding(
        padding: const EdgeInsets.only(left: 50),
        child: Row(
          children: [
            SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (!Responsive.isDesktop(context))
                    SizedBox(
                      height: size.height * 0.06,
                    ),
                  if (!Responsive.isDesktop(context))
                    Row(
                      children: [
                        SizedBox(
                          width: size.width * 0.23,
                        ),
                        ImageContainer(
                          height: 400,
                          width: 300,
                          imagePath: 'assets/images/image.png',
                        ),
                      ],
                    ),
                  if (!Responsive.isDesktop(context))
                    SizedBox(
                      height: size.height * 0.1,
                    ),
                  const Responsive(
                      desktop: MyPortfolioText(start: 40, end: 50),
                      largeMobile: MyPortfolioText(start: 40, end: 35),
                      mobile: MyPortfolioText(start: 35, end: 30),
                      tablet: MyPortfolioText(start: 50, end: 40)),
                  if (kIsWeb && Responsive.isLargeMobile(context))
                    Container(
                      height: defaultPadding,
                      color: Colors.transparent,
                    ),
                  const CombineSubtitleText(),
                  const SizedBox(height: defaultPadding / 2),
                  const Responsive(
                    desktop: AnimatedDescriptionText(start: 14, end: 15),
                    largeMobile: AnimatedDescriptionText(start: 14, end: 12),
                    mobile: AnimatedDescriptionText(start: 14, end: 12),
                    tablet: AnimatedDescriptionText(start: 17, end: 14),
                  ),
                  const SizedBox(
                    height: defaultPadding * 2,
                  ),
                  const DownloadButton(),
                ],
              ),
            ),
            const Spacer(),
            if (Responsive.isDesktop(context))
              ImageContainer(
                height: size.height / 2,
                width: size.width / 3,
                imagePath: 'assets/images/image.png',
              ),
            const Spacer()
          ],
        ),
      ),
    );
  }
}