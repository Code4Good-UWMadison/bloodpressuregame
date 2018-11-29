// export const ACTION_INVALID = ["This action is invalid!","test"]
// export const CONSTANT_NUMBER_1 = 'hello I am a constant';
// export const CONSTANT_NUMBER_2 = 'hello I am also a constant';

//Fix it: (3-18) - 3
//        (20-42) - 4
//  randomizer
       // fixItInd : Integer
       // fixItInd = Math.floor(Math.random(42)+3);
       // while(fixItInd == 19) {
       //   fixItInd = Math.floor(Math.random(42)+3);
       // }
       // if(ficItInt <= 18) {
       //   ficItInt -= 3;
       // } else if(ficItInt >= 20) {
       //   ficItInt -= 4;
       // }
//Big Picture: (43-57) - 3
// export const cards = [
//   //fix it
//   "Limit fluids","Cortisol","Stimulate Reticularis","Stimulate Fasiculata",
//   "Histamine","Nitroglycerine","Stimulate Vasomotor Center","Stimulate Cardioacceleratory Center",
//   "Stimulate Glomerulosa","Vasopressin","Stimulate Cardioinhibitory Center","Epinephrine",
//   "Nitric Oxide(NO)","Beta-2 Receptor Antagonist", "Limit Salt Intake", "Promote Salt Intake",
//   "Alpha-1 Receptor Agonist","Promote Rehydration","Angiotensin II","ACE Inhibitors",
//   "Norepinephrine","Muscarinic Acetylcholine Receptor Agonist","Alpha-1 Receptor Antagonist","Atrial Natriuretic Peptide (ANP)",
//   "Beta-2 Receptor Agonist","Stimulate Adrenal Medulla","Beta-1 Receptor Antagonist","Beta-1 Receptor Agonist",
//   "Muscarinic Acetylcholine Receptor Antagonist","Guanylyl Cyclase Activator","Guanylyl Cyclase Inhibitor","cGMP breakdown",
//   "cGMP production","Increase Cytosolic Calcium","Decrease Cytosolic Calcium","cAMP production",
//   "cAMP breakdown","PKA activation","PKA inhibition",
//   // big picture
//   "Increase MABP","Increase TPR","Decrease MABP",
//   "Decrease TPR","Increase Stroke Volume","Decrease Stroke Volume",
//   "Decrease Cardiac Output","Increase Cardiac Output","Decrease Heart Rate",
//   "Increase Heart Rate","Increase Venous Return","Increase Contractility",
//   "Decrease Contractility","Decrease Ejection Fraction","Increase Ejection Fraction"
// ];

export const fixit = [
  "Limit fluids","Cortisol","Stimulate Reticularis","Stimulate Fasiculata",
  "Histamine","Nitroglycerine","Stimulate Vasomotor Center","Stimulate Cardioacceleratory Center",
  "Stimulate Glomerulosa","Vasopressin","Stimulate Cardioinhibitory Center","Epinephrine",
  "Nitric Oxide(NO)","Beta-2 Receptor Antagonist", "Limit Salt Intake", "Promote Salt Intake",
  "Alpha-1 Receptor Agonist","Promote Rehydration","Angiotensin II","ACE Inhibitors",
  "Norepinephrine","Muscarinic Acetylcholine Receptor Agonist","Alpha-1 Receptor Antagonist","Atrial Natriuretic Peptide (ANP)",
  "Beta-2 Receptor Agonist","Stimulate Adrenal Medulla","Beta-1 Receptor Antagonist","Beta-1 Receptor Agonist",
  "Muscarinic Acetylcholine Receptor Antagonist","Guanylyl Cyclase Activator","Guanylyl Cyclase Inhibitor","cGMP breakdown",
  "cGMP production","Increase Cytosolic Calcium","Decrease Cytosolic Calcium","cAMP production",
  "cAMP breakdown","PKA activation","PKA inhibition"
];

export const bigpic = [
  "Increase MABP","Increase TPR","Decrease MABP",
  "Decrease TPR","Increase Stroke Volume","Decrease Stroke Volume",
  "Decrease Cardiac Output","Increase Cardiac Output","Decrease Heart Rate",
  "Increase Heart Rate","Increase Venous Return","Increase Contractility",
  "Decrease Contractility","Decrease Ejection Fraction","Increase Ejection Fraction"
];

export const scenarios = [
  "Problem: Blood pressure is too low, due to blood loss.",
  "Problem: Patient’s blood pressure is too high due to the kidneys reabsorbing water and constantly increasing the volume of blood, despite high blood pressure.",
  "Problem: blood pressure is low due to dehydration from alcohol consumption, and heart rate is high.",
  "Problem: patient has very high blood pressure due to his atherosclerosis.",
  "Problem: Patient is having an allergic reaction, very low blood pressure.",
  "Problem: patient has a post-op infection - decreased urine output, pale and clammy. Slightly low BP.",
  "Problem: Man just ate entire bag of pretzels and a large soda, high blood pressure of 150/86.",
  "Problem: high blood pressure (135/95) and racing heart rate (over 110), overly caffeinated(dehydrated).",
  "Problem: Allergic reaction causing histamine release.",
  "Problem: Climber descending from Mt. Everest experiencing symptoms from sudden changes in air pressure.",
  "Problem: Woman experiencing symptoms of preeclampsia, which includes high blood pressure.",
  "Problem: Patient has hypersecretion of adrenal cortex hormones.",
  "Problem: Patient with heart failure has low blood pressure and high heart rate.",
  "Problem: Patient has diabetes insipidus, causing high urine output.",
  "Problem: Patient taking corticosteroid.",
  "Problem: Patient with neurogenic shock has low heart rate and urine output.",
  "Problem: Patient has edema build-up due to high blood pressure."
];

export const explanation = [
  "Limiting fluids will inhibit blood volume from increasing, which in turn will prevent blood pressure from increasing further (more blood volume, higher blood pressure).",
  "One of the effects cortisol has on the body is to increase blood pressure by supporting the sympathetic nervous system responses.",
  "",
  "The zona fasciculata of the adrenal cortex secretes cortisol.",
  "",
  "",
  "The vasomotor center is involved in the baroreceptor reflex to changes in blood pressure. When blood pressure falls, baroreceptors on the aorta are not stretched as much, so their firing to the cardioacceleratory and vasomotor centers in the brain decrease. Baroreceptors fire inhibitory postsynaptic potentials on the cardioinhibitory and vasomotor centers, therefore a decrease in that inhibitory input would increase their activity. The vasomotor center causes vasoconstriction, thus regulating total peripheral resistance, and is involved in sympathetic nervous system responses.",
  "The cardioacceleratory center is involved in the baroreceptor reflex to changes in blood pressure. When blood pressure falls, baroreceptors on the aorta are not stretched as much, so their firing to the cardioacceleratory and vasomotor centers in the brain decrease. Baroreceptors fire inhibitory postsynaptic potentials on the cardioinhibitory and vasomotor centers, therefore a decrease in that inhibitory input would increase their activity. The cardioacceleratory center causes an increase heart rate and contractility, and it is involved in sympathetic nervous system responses.",
  "The zona glomerulosa secretes the hormone aldosterone which increases sodium reabsorption by the kidneys. Water tends to follow sodium through osmosis to maintain osmolarity. ",
  "Vasopressin, also known as antidiuretic hormone (ADH) works in two ways to increase blood pressure. It constricts arterioles causing an increase in BP as well as inducing the insertion of aquaporin channels in the collecting duct cells of the kidneys to increase the reabsorption of water. This increase in blood volume causes a rise in blood pressure.",
  "",
  "Epinephrine has a higher affinity for beta-2 receptors, which dilate arterioles, but at a pharmacological dosage, there is enough epinephrine that binds to alpha-1 receptors (which cause vasoconstriction) for the sympathetic response of alpha-1s to outweigh the parasympathetic response of the beta-2s, due to the sheer quantity of alpha-1 receptors compared to beta-2s.",
  "Beta-2 receptors cause arterioles to dilate, so blocking them with an antagonist would prevent local factors from binding.",
  "",
  "An increase in sodium in the blood will increase the osmolarity, causing more water to be reabsorbed from the kidneys in order to restore a homeostatic osmolarity. The increase in blood volume raises blood pressure.",
  "Alpha-1 receptors are located on the blood vessels, and when activated cause an increase in vasoconstriction, which results in a higher blood pressure.",
  "An increase in water will increase blood volume, in turn raising blood pressure.",
  "Angiotensin II is a hormone that raises blood pressure in 2 ways. First, it acts on the cardiovascular system, causing vasoconstriction. Second, it increases the secretion of aldosterone, in turn promoting sodium reabsorption which increases water reabsorption. The increase in blood volume plus vasoconstriction results in a higher blood pressure.",
  "",
  "Norepinephrine is a neurohormone that is released by sympathetic varicosities. It has a higher affinity for alpha-1 receptors, which are located in arterioles. Alpha-1 receptors cause vasoconstriction which increases blood pressure.",
  "",
  "",
  "",
  "",
  "The adrenal medulla secretes primarily epinephrine and a small amount of norepinephrine. Norepinephrine initiates the “fight-or-flight” sympathetic response while epinephrine supports it. The sympathetic response raises blood pressure.",
  "",
  "Beta-1 receptors are located on the SA node and cardiac muscle cells and respond to norepinephrine and epinephrine. These speed up the heart and increase the contractility of the ventricles, increasing cardiac output and thus increasing arterial blood pressure.",
  "Muscarinic acetylcholine receptors are the postganglionic receptors of the parasympathetic nervous system. In the cardiovascular system, they are located on the SA node, and when stimulated they hyperpolarize the membrane of the SA node, reducing the pacemaker potential and slowing the heart rate. Although heart rate is not directly related to blood pressure, a slower heart rate due to parasympathetic input will not aid in raising blood pressure, therefore a muscarinic-Ach receptor antagonist will take that inhibition away.",
  "",
  "Guanylyl cyclase is an enzyme that is activated by nitric oxide. Guanylyl cyclase produces cyclic GMP (cGMP) which activates protein kinase G to phosphorylate proteins that open potassium channels. This hyperpolarizes the membrane, releasing the contraction in arterioles, thus dilating them and lowering blood pressure. Therefore, a substance that inhibits guanylyl cyclase would prevent that from happening, thus maintaining smooth muscle contraction and higher blood pressure.",
  "As described in 34, cGMP is part of the second messenger pathway that leads to vasodilation. Decreasing the amount of cGMP by breaking it down would prevent that and help in achieving a higher blood pressure.",
  "",
  "Increasing the calcium in the cytosol of a cardiac muscle cell means that there is more calcium available to bind to troponin to allow actin and myosin to bind and cross bridge cycling to occur. This strengthens the contractions of the heart, meaning it pumps harder. This increases the blood pressure by increasing stroke volume and cardiac output. ",
  "",
  "cAMP is part of the second messenger pathway when epinephrine and norepinephrine binds to beta-1 receptors on the heart. The receptor activates adenylyl cyclase which produces cAMP, activating protein kinase A (PKA) that increases cytosolic calcium from both the interstitial fluid and the sarcoplasmic reticulum. This extra calcium, as described in 37, increases contraction force and speed. This increases blood pressure by increasing stroke volume and cardiac output.",
  "",
  "Protein kinase A, as described in 39, is part of the second messenger pathway that responds to sympathetic input by increasing heart rate and contractility, which increases blood pressure.",
  "",
  "A blood pressure of 76/43 is too low so blood pressure needs to increase.",
  "Total peripheral resistance refers to the level of resistance blood encounters while flowing through vessels. Resistance is inversely related to radius, to a power of 4. Therefore an increase in TPR indicates vasoconstriction, increasing blood pressure.",
  "",
  "",
  "Stroke volume is a measure of the difference in the volume of blood in the left ventricle between systole and diastole. Stroke volume can be influenced by the contractility of the heart, meaning a harder contraction results in a higher stroke volume. This increases the amount of blood entering the aorta each beat, increasing arterial pressure. ",
  "",
  "",
  "Cardiac output is the product of stroke volume and heart rate. A higher cardiac output indicates more blood being pumped into the aorta faster, increasing arterial blood pressure. ",
  "",
  "",
  "An increase in venous return can be induced by sympathetic stimulation of alpha-1 receptors. The increase in blood back toward the heart can increase blood pressure through increased stroke volume. ",
  "Increasing the force of contraction in cardiac muscle cells means that more blood will be pumped out per beat, increasing stroke volume and blood pressure. ",
  "",
  "",
  "An increase in ejection fraction would allow more blood to be ejected during systole. This would increase the amount of blood in circulation, and would therefore increase the overall blood pressure.",
  "",
  "",
  "",
  "",
  "",

];
export const answers = []
